import { readFile, writeFile } from './utils.js';
import CodeBlockWriter from 'code-block-writer';
import path from 'path';
import fs from 'fs/promises';

// Load shared types mapping
let sharedTypesMapping: any = null;

async function loadSharedTypesMapping() {
  if (!sharedTypesMapping) {
    try {
      const mappingContent = await readFile('scripts/shared-types-mapping.json');
      sharedTypesMapping = JSON.parse(mappingContent);
    } catch (error) {
      console.warn('No shared types mapping found, using component-specific types');
      sharedTypesMapping = { sharedTypes: [] };
    }
  }
  return sharedTypesMapping;
}

interface ComponentIR {
  name: string;
  tagName: string;
  packagePath: string;
  description?: string;
  documentation?: string;
  since?: string;
  attributes: AttributeIR[];
  events: EventIR[];
  slots: SlotIR[];
  cssProperties: CSSPropertyIR[];
  cssParts: CSSPartIR[];
  methods: MethodIR[];
  dependencies: string[];
}

interface AttributeIR {
  name: string;
  fieldName?: string;
  type: string;
  unionValues?: string[];    // Union type values if type is a union (e.g., ["neutral", "brand", "success"])
  description?: string;
  default?: string;
  required?: boolean;
  reflects?: boolean;
}

interface EventIR {
  name: string;
  eventType?: string;
  description?: string;
  reactName?: string;
}

interface SlotIR {
  name: string;
  description?: string;
}

interface CSSPropertyIR {
  name: string;
  description?: string;
  default?: string;
}

interface CSSPartIR {
  name: string;
  description?: string;
}

interface MethodIR {
  name: string;
  description?: string;
  parameters: ParameterIR[];
  returnType?: string;
  public: boolean;
}

interface ParameterIR {
  name: string;
  type: string;
  optional?: boolean;
  description?: string;
}

// Helper functions
function toCamelCase(str: string): string {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function toPascalCase(str: string): string {
  const camelCase = toCamelCase(str);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
}

function getComponentClassName(tagName: string): string {
  // Convert wa-button-group to ButtonGroup
  return toPascalCase(tagName.replace('wa-', ''));
}

function generateUnionType(values: string[]): string {
  // Convert array of string values to Scala union type
  // e.g., ["neutral", "brand", "success"] -> "\"neutral\" | \"brand\" | \"success\""
  return values.map(value => `"${value}"`).join(' | ');
}

function getUnionTypeName(attributeName: string, componentName: string): string {
  // Generate a type alias name for union types
  // e.g., variant for Button -> ButtonVariant
  return `${componentName}${toPascalCase(attributeName)}`;
}

function shouldUseUnionType(attr: AttributeIR): boolean {
  // Use union type if we have unionValues and the base type is String
  return !!(attr.unionValues && attr.unionValues.length > 0 && attr.type === 'String');
}

function findSharedType(unionValues: string[]): string | null {
  if (!sharedTypesMapping || !unionValues) return null;
  
  const signature = [...unionValues].sort().join('|');
  const sharedType = sharedTypesMapping.sharedTypes.find((st: any) => st.signature === signature);
  return sharedType ? sharedType.name : null;
}

function getUnionTypeReference(attr: AttributeIR, componentName: string): string {
  if (!attr.unionValues) return 'String';
  
  // First try to find a shared type
  const sharedTypeName = findSharedType(attr.unionValues);
  if (sharedTypeName) {
    return `SharedTypes.${sharedTypeName}`;
  }
  
  // Fallback to component-specific type (for rare cases)
  return getUnionTypeName(attr.name, componentName);
}

function mapTypeScriptToScala(tsType: string): string {
  const typeMap: Record<string, string> = {
    'string': 'String',
    'boolean': 'Boolean',
    'number': 'Double',
    'Function': '() => Unit',
    'undefined': 'js.UndefOr[String]',
    'HTMLElement': 'dom.HTMLElement',
    'HTMLImageElement': 'dom.html.Image',
    'HTMLButtonElement': 'dom.html.Button',
    'HTMLLinkElement': 'dom.html.Anchor',
    'HTMLSlotElement': 'dom.html.Element',
    'Animation': 'js.Object',
    'Keyframe[]': 'js.Array[js.Object]',
    'CSSNumberish': 'js.Any',
    'PlaybackDirection': 'String',
    'FillMode': 'String',
    'File': 'js.Object',
    'FormData': 'js.Object',
    'void': 'Unit'
  };

  // Handle union types with null/undefined - simplify to js.Any
  if (tsType.includes(' | ') && (tsType.includes('null') || tsType.includes('undefined'))) {
    return 'js.Any';
  }

  // Handle union types like 'small' | 'medium' | 'large'
  if (tsType.includes(' | ')) {
    const unionTypes = tsType.split(' | ').map(t => t.trim().replace(/'/g, '"'));
    // For string literal unions, we'll use String in Scala with validation
    if (unionTypes.every(t => t.startsWith('"') && t.endsWith('"'))) {
      return 'String';
    }
    // For complex unions, use js.Any
    return 'js.Any';
  }

  // Handle object types with braces - simplify to js.Object
  if (tsType.includes('{') && tsType.includes('}')) {
    return 'js.Object';
  }

  // Handle array types
  if (tsType.endsWith('[]')) {
    const baseType = tsType.slice(0, -2);
    return `js.Array[${mapTypeScriptToScala(baseType)}]`;
  }

  // Handle generic types like Promise<T>
  if (tsType.includes('<')) {
    const baseType = tsType.split('<')[0];
    if (baseType === 'Promise') {
      return 'js.Promise[js.Any]';
    }
  }

  return typeMap[tsType] || 'js.Any';
}

function getJSFacadeType(irType: string, unionValues?: string[]): string {
  // If we have union values, use shared type name
  if (unionValues && unionValues.length > 0 && irType === 'String') {
    const sharedTypeName = findSharedType(unionValues);
    if (sharedTypeName) {
      return sharedTypeName; // Use shared type name directly with wildcard import
    } else {
      // Fallback to inline union type if not found (shouldn't happen)
      return generateUnionType(unionValues);
    }
  }
  
  // Map IR types to proper Scala.js facade types
  switch (irType) {
    case 'String': return 'String';
    case 'Boolean': return 'Boolean';
    case 'Double': return 'Double';
    case 'null': return 'String'; // DOM string attributes that can be null are still typed as String
    case 'js.Array[js.Object]': return 'js.Array[js.Object]';
    case 'js.Promise[js.Any]': return 'js.Promise[js.Any]';
    case 'js.Object': return 'js.Object';
    case 'dom.HTMLElement': return 'dom.HTMLElement';
    case 'dom.html.Image': return 'dom.html.Image';
    case 'dom.html.Button': return 'dom.html.Button';
    case 'dom.html.Anchor': return 'dom.html.Anchor';
    case 'dom.html.Element': return 'dom.html.Element';
    case 'Unit': return 'Unit';
    // Handle some common js.Any cases more specifically
    case 'js.Any':
      return 'js.Any';
    default: 
      // Try to map common patterns
      if (irType.includes('string') || irType.includes('String')) {
        return 'String';
      }
      if (irType.includes('boolean') || irType.includes('Boolean')) {
        return 'Boolean';
      }
      if (irType.includes('number') || irType.includes('Double')) {
        return 'Double';
      }
      // For any complex types or unknowns, fall back to js.Any
      return 'js.Any';
  }
}

function getScalaAttributeType(type: string, unionValues?: string[], componentName?: string, attributeName?: string): string {
  // For union types, use shared type (all union types are now in SharedTypes)
  if (unionValues && unionValues.length > 0 && type === 'String' && componentName && attributeName) {
    const sharedTypeName = findSharedType(unionValues);
    if (sharedTypeName) {
      return `HtmlAttr[${sharedTypeName}]`; // No prefix needed with wildcard import
    } else {
      // This shouldn't happen since we're putting all union types in SharedTypes now
      console.warn(`Union type not found in SharedTypes for ${componentName}.${attributeName}`);
      return `HtmlAttr[String]`;
    }
  }
  
  // For regular types, use standard attribute types
  switch (type) {
    case 'Boolean': return 'HtmlAttr[Boolean]';
    case 'String': return 'HtmlAttr[String]';
    case 'Double': return 'HtmlAttr[Double]';
    default: return 'HtmlAttr[String]';
  }
}

function getScalaAttributeConstructor(type: string, unionValues?: string[]): string {
  // For union types, use the unionAttr constructor
  if (unionValues && unionValues.length > 0 && type === 'String') {
    return 'unionAttr';
  }
  
  switch (type) {
    case 'Boolean': return 'boolAttr';
    case 'String': return 'stringAttr';
    case 'Double': return 'doubleAttr';
    default: return 'stringAttr';
  }
}

function escapeScalaKeyword(name: string): string {
  const keywords = ['type', 'class', 'object', 'trait', 'def', 'val', 'var', 'import', 'package', 'for', 'lazy', 'case', 'match', 'if', 'else', 'while', 'do', 'try', 'catch', 'finally', 'throw', 'return', 'yield', 'new', 'this', 'super', 'extends', 'with', 'abstract', 'override', 'final', 'sealed', 'private', 'protected'];
  if (keywords.includes(name)) {
    return `\`${name}\``;
  }
  return name;
}

function generateScalaDoc(description?: string, documentation?: string): string {
  if (!description && !documentation) return '';
  
  let doc = '/**\n';
  if (description) {
    // Split long descriptions into multiple lines
    const lines = description.split('\n');
    lines.forEach(line => {
      doc += `  * ${line}\n`;
    });
    doc += '  *\n';
  }
  if (documentation) {
    doc += `  * [[${documentation} WebAwesome ${getComponentClassName('')} docs]]\n`;
  }
  doc += '  */';
  return doc;
}

async function generateComponent(component: ComponentIR): Promise<string> {
  // Load shared types mapping
  await loadSharedTypesMapping();
  
  const writer = new CodeBlockWriter({
    indentNumberOfSpaces: 2,
    useTabs: false
  });

  const className = getComponentClassName(component.tagName);
  const componentRef = `${component.name}Component`;

  // We always import SharedTypes since all union types are centralized there

  // Package declaration
  writer.writeLine('package io.github.nguyenyou.webawesome.laminar');
  writer.blankLine();

  // Imports
  writer.writeLine('import com.raquo.laminar.keys.{EventProp, HtmlAttr, HtmlProp}');
  writer.writeLine('import com.raquo.laminar.api.L');
  writer.writeLine('import com.raquo.laminar.nodes.Slot');
  writer.writeLine('import org.scalajs.dom');
  writer.blankLine();
  writer.writeLine('import scala.scalajs.js');
  writer.writeLine('import scala.scalajs.js.|');
  writer.writeLine('import scala.scalajs.js.annotation.JSImport');
  
  // Import SharedTypes if needed (always import since we're moving all union types there)
  writer.writeLine('import io.github.nguyenyou.webawesome.laminar.SharedTypes.*');
  
  writer.blankLine();

  // Generated comment
  writer.writeLine('// This file is generated at compile-time by WebAwesome generator');
  writer.blankLine();

  // ScalaDoc
  if (component.description || component.documentation) {
    const scalaDoc = generateScalaDoc(component.description, component.documentation);
    writer.writeLine(scalaDoc);
  }

  // Object declaration
  writer.write(`object ${className} extends WebComponent("${component.tagName}")`).block(() => {
    writer.blankLine();

    // JS Import
    writer.writeLine('@JSImport("@awesome.me/webawesome/dist/components/' + 
      component.tagName.replace('wa-', '') + '/' + 
      component.tagName.replace('wa-', '') + '.js", JSImport.Namespace)');
    writer.writeLine('@js.native object RawImport extends js.Object');
    writer.blankLine();

    // Type definitions
    writer.writeLine(`type Self = ${className}.type`);
    writer.blankLine();
    writer.writeLine(`type Ref = ${componentRef} & dom.HTMLElement`);
    writer.blankLine();

    // All union types are now in SharedTypes.scala - no component-specific types needed

    // Events section
    if (component.events.length > 0) {
      writer.writeLine('// -- Events --');
      writer.blankLine();

      component.events.forEach(event => {
        if (event.name) {
          if (event.description) {
            writer.writeLine(`/** ${event.description} */`);
          }
          const eventName = toCamelCase(event.name.replace('wa-', 'on-'));
          writer.writeLine(`lazy val ${eventName}: EventProp[dom.Event] = eventProp("${event.name}")`);
          writer.blankLine();
        }
      });
    }

    // Attributes section
    if (component.attributes.length > 0) {
      writer.writeLine('// -- Attributes --');
      writer.blankLine();

      component.attributes.forEach(attr => {
        // Generate enhanced documentation for union types
        let documentation = attr.description || '';
        if (shouldUseUnionType(attr)) {
          const validValues = attr.unionValues!.map(v => `"${v}"`).join(', ');
          if (documentation) {
            documentation += ` Valid values: ${validValues}.`;
          } else {
            documentation = `Valid values: ${validValues}.`;
          }
        }
        
        if (documentation) {
          writer.writeLine(`/** ${documentation} */`);
        }
        
        const attrName = escapeScalaKeyword(toCamelCase(attr.name));
        const scalaType = getScalaAttributeType(attr.type, attr.unionValues, className, attr.name);
        const constructor = getScalaAttributeConstructor(attr.type, attr.unionValues);
        
        writer.writeLine(`lazy val ${attrName}: ${scalaType} = ${constructor}("${attr.name}")`);
        writer.blankLine();

        // Add common aliases for 'type' attribute
        if (attr.name === 'type') {
          writer.writeLine(`lazy val typ: ${scalaType} = \`type\``);
          writer.blankLine();
          writer.writeLine(`lazy val tpe: ${scalaType} = \`type\``);
          writer.blankLine();
        }
      });
    }

    // Props section (for special cases like value) - but only if value is not already defined as attribute
    const hasValueAttr = component.attributes.some(attr => attr.name === 'value');
    if (hasValueAttr) {
      writer.writeLine('// -- Props --');
      writer.blankLine();
      writer.writeLine('/** The value of the component. */');
      writer.writeLine('lazy val valueProp: HtmlProp[String, ?] = L.value');
      writer.blankLine();
    }

    // Slots section
    if (component.slots.length > 0) {
      writer.writeLine('// -- Slots --');
      writer.blankLine();
      writer.write('object slots').block(() => {
        component.slots.forEach(slot => {
          if (slot.description) {
            let description = slot.description;
            if (slot.name === '') {
              description += ' Note: You can just say `_ => element` instead of `_.slots.default(element)`';
            }
            writer.writeLine(`/** ${description} */`);
          }
          
          const slotName = slot.name === '' ? 'default' : toCamelCase(slot.name);
          writer.writeLine(`lazy val ${slotName}: Slot = Slot("${slot.name}")`);
          writer.blankLine();
        });
      });
      writer.blankLine();
    }

    // CSS Variables section
    if (component.cssProperties.length > 0) {
      writer.writeLine('// -- CSS Vars --');
      writer.blankLine();
      writer.writeLine('/** For documentation only. You need to style these from a CSS stylesheet. */');
      writer.write('object cssVars').block(() => {
        component.cssProperties.forEach(cssProp => {
          if (cssProp.description) {
            let description = cssProp.description;
            if (cssProp.default) {
              description += ` Default: ${cssProp.default}`;
            }
            writer.writeLine(`/** ${description} */`);
          }
          
          const propName = toCamelCase(cssProp.name.replace('--', ''));
          writer.writeLine(`lazy val ${propName}: String = "${cssProp.name}"`);
          writer.blankLine();
        });
      });
      writer.blankLine();
    }

    // CSS Parts section
    if (component.cssParts.length > 0) {
      writer.writeLine('// -- CSS Parts --');
      writer.blankLine();
      writer.writeLine('/** For documentation only. You need to style these from a CSS stylesheet. */');
      writer.write('object cssParts').block(() => {
        component.cssParts.forEach(part => {
          if (part.description) {
            writer.writeLine(`/** ${part.description} */`);
          }
          
          const partName = toCamelCase(part.name);
          writer.writeLine(`lazy val ${partName}: String = "${part.name}"`);
          writer.blankLine();
        });
      });
      writer.blankLine();
    }

    // Element type (JS facade)
    writer.writeLine('// -- Element type --');
    writer.blankLine();
    writer.write(`@js.native trait ${componentRef} extends js.Object`).block(() => {
      writer.writeLine('this: dom.HTMLElement =>');
      writer.blankLine();

      // Add component-specific properties
      component.attributes.forEach(attr => {
        // Generate enhanced documentation for union types in JS facade
        let documentation = attr.description || '';
        if (shouldUseUnionType(attr)) {
          const validValues = attr.unionValues!.map(v => `"${v}"`).join(', ');
          if (documentation) {
            documentation += ` Valid values: ${validValues}.`;
          } else {
            documentation = `Valid values: ${validValues}.`;
          }
        }
        
        if (documentation) {
          writer.writeLine(`/** ${documentation} */`);
        }
        
        const fieldName = attr.fieldName || toCamelCase(attr.name);
        // Use the proper type from IR instead of mapping everything to js.Any
        const jsType = getJSFacadeType(attr.type, attr.unionValues);
        
        writer.writeLine(`var ${escapeScalaKeyword(fieldName)}: ${jsType}`);
        writer.blankLine();
      });

      // Add public methods
      const publicMethods = component.methods.filter(m => m.public && m.name !== 'constructor');
      publicMethods.forEach(method => {
        if (method.description) {
          writer.writeLine(`/** ${method.description} */`);
        }
        
        const params = method.parameters.map(p => {
          const paramType = mapTypeScriptToScala(p.type);
          // Fix default value for js.Object types
          let optionalSuffix = '';
          if (p.optional) {
            if (paramType === 'js.Object') {
              optionalSuffix = ' = js.Object()';
            } else {
              optionalSuffix = ' = js.undefined';
            }
          }
          
          // Handle object destructuring parameter names by simplifying them
          let paramName = p.name;
          if (paramName.includes('{') || paramName.includes('}')) {
            paramName = 'options';
          }
          
          return `${paramName}: ${paramType}${optionalSuffix}`;
        }).join(', ');
        
        const returnType = mapTypeScriptToScala(method.returnType || 'Unit');
        writer.writeLine(`def ${method.name}(${params}): ${returnType} = js.native`);
        writer.blankLine();
      });
    });
  });

  return writer.toString();
}

async function generateAllComponents() {
  console.log('=== WebAwesome Laminar Component Generation ===');
  
  // Load the generated IR
  const irData = JSON.parse(await readFile('scripts/webawesome-laminar-ir.json'));
  const components: ComponentIR[] = irData.components;
  console.log(`Generating ${components.length} components...`);
  
  // Ensure output directory exists
  const outputDir = 'webawesome-laminar/src/io/github/nguyenyou/webawesome/laminar';
  await fs.mkdir(outputDir, { recursive: true });
  
  let generatedCount = 0;
  
  for (const component of components) {
    try {
      const className = getComponentClassName(component.tagName);
      const scalaCode = await generateComponent(component);
      const outputPath = path.join(outputDir, `${className}.scala`);
      
      await writeFile(outputPath, scalaCode);
      console.log(`✓ Generated ${className}.scala`);
      generatedCount++;
      
    } catch (error) {
      console.error(`✗ Failed to generate ${component.name}:`, error);
    }
  }
  
  console.log(`\n=== Generation Complete ===`);
  console.log(`Successfully generated: ${generatedCount}/${components.length} components`);
  console.log(`Output directory: ${outputDir}`);
  
  // Generate summary
  const summary = {
    totalComponents: generatedCount,
    totalAttributes: components.reduce((sum, c) => sum + c.attributes.length, 0),
    totalEvents: components.reduce((sum, c) => sum + c.events.length, 0),
    totalSlots: components.reduce((sum, c) => sum + c.slots.length, 0),
    components: components.map(c => ({
      name: getComponentClassName(c.tagName),
      tagName: c.tagName,
      attributes: c.attributes.length,
      events: c.events.length,
      slots: c.slots.length
    }))
  };
  
  await writeFile('scripts/generation-summary.json', JSON.stringify(summary, null, 2));
  console.log('Generation summary saved to: scripts/generation-summary.json');
}

// Run the generator
generateAllComponents().catch(console.error); 