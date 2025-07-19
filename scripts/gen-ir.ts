// Import from node_modules to use the version specified in package.json
import manifest from '../node_modules/@awesome.me/webawesome/dist/custom-elements.json' with { type: "json" };
import { writeFile } from './utils.js';

console.log('Processing manifest with', manifest.modules.length, 'modules');

// IR Types for Laminar component generation
interface ComponentIR {
  // Basic component info
  name: string;              // Component class name (e.g., "WaButton")
  tagName: string;           // HTML tag name (e.g., "wa-button")
  packagePath: string;       // Scala package path
  description?: string;      // Component description
  documentation?: string;    // Documentation URL
  since?: string;           // Version info
  
  // Component structure
  attributes: AttributeIR[];
  events: EventIR[];
  slots: SlotIR[];
  cssProperties: CSSPropertyIR[];
  cssParts: CSSPartIR[];
  methods: MethodIR[];
  
  // Dependencies
  dependencies: string[];    // Other wa-* components this depends on
}

interface AttributeIR {
  name: string;              // HTML attribute name (e.g., "disabled")
  fieldName?: string;        // JS field name if different (e.g., "withCaret" for "with-caret")
  type: string;              // TypeScript/Scala type
  unionValues?: string[];    // Union type values if type is a union (e.g., ["neutral", "brand", "success"])
  description?: string;
  default?: string;
  required?: boolean;
  reflects?: boolean;        // Whether changes reflect to attribute
}

interface EventIR {
  name: string;              // Event name (e.g., "wa-load")
  eventType?: string;        // Event type class (e.g., "WaLoadEvent")
  description?: string;
  reactName?: string;        // React event name for reference
}

interface SlotIR {
  name: string;              // Slot name (empty string for default slot)
  description?: string;
}

interface CSSPropertyIR {
  name: string;              // CSS custom property name (e.g., "--size")
  description?: string;
  default?: string;
}

interface CSSPartIR {
  name: string;              // CSS part name (e.g., "base")
  description?: string;
}

interface MethodIR {
  name: string;              // Method name
  description?: string;
  parameters: ParameterIR[];
  returnType?: string;
  public: boolean;           // Whether it's a public API method
}

interface ParameterIR {
  name: string;
  type: string;
  optional?: boolean;
  description?: string;
}

type Module = typeof manifest.modules[number];
type Declaration = Module['declarations'][number];

// Helper functions for type mapping
function extractUnionValues(tsType: string): string[] | undefined {
  // Handle union types like 'small' | 'medium' | 'large'
  if (tsType.includes(' | ')) {
    const unionTypes = tsType.split(' | ').map(t => t.trim());
    // For string literal unions, extract the literal values
    if (unionTypes.every(t => (t.startsWith("'") && t.endsWith("'")) || (t.startsWith('"') && t.endsWith('"')))) {
      return unionTypes.map(t => t.slice(1, -1)); // Remove quotes
    }
  }
  return undefined;
}

function mapTypeScriptToScala(tsType: string, unionValues?: string[]): string {
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
    'FillMode': 'String'
  };

  // Handle union types like 'small' | 'medium' | 'large'
  if (tsType.includes(' | ')) {
    const unionTypes = tsType.split(' | ').map(t => t.trim().replace(/'/g, '"'));
    // For string literal unions, we'll use String in Scala but preserve union info
    if (unionTypes.every(t => t.startsWith('"') && t.endsWith('"'))) {
      return 'String'; // Still return String, but unionValues will contain the actual values
    }
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

  return typeMap[tsType] || tsType;
}

function generatePackagePath(tagName: string): string {
  // Convert wa-button-group to ButtonGroup
  const parts = tagName.replace('wa-', '').split('-');
  const className = parts.map(part => 
    part.charAt(0).toUpperCase() + part.slice(1)
  ).join('');
  return `io.github.nguyenyou.webawesome.laminar.${className}`;
}

function parseAttributes(declaration: any): AttributeIR[] {
  if (!declaration.attributes) return [];
  
  return declaration.attributes.map((attr: any): AttributeIR => {
    const typeText = attr.type?.text || 'String';
    const unionValues = extractUnionValues(typeText);
    
    return {
      name: attr.name,
      fieldName: attr.fieldName,
      type: mapTypeScriptToScala(typeText, unionValues),
      unionValues: unionValues,
      description: attr.description,
      default: attr.default,
      reflects: declaration.members?.find((m: any) => 
        m.name === attr.fieldName && m.reflects
      )?.reflects
    };
  });
}

function parseEvents(declaration: any): EventIR[] {
  if (!declaration.events) return [];
  
  return declaration.events.map((event: any): EventIR => ({
    name: event.name,
    eventType: event.eventName || event.type?.text,
    description: event.description,
    reactName: event.reactName
  }));
}

function parseSlots(declaration: any): SlotIR[] {
  if (!declaration.slots) return [];
  
  return declaration.slots.map((slot: any): SlotIR => ({
    name: slot.name || '', // Empty string for default slot
    description: slot.description
  }));
}

function parseCSSProperties(declaration: any): CSSPropertyIR[] {
  if (!declaration.cssProperties) return [];
  
  return declaration.cssProperties.map((prop: any): CSSPropertyIR => ({
    name: prop.name,
    description: prop.description,
    default: prop.default
  }));
}

function parseCSSParts(declaration: any): CSSPartIR[] {
  if (!declaration.cssParts) return [];
  
  return declaration.cssParts.map((part: any): CSSPartIR => ({
    name: part.name,
    description: part.description
  }));
}

function parseMethods(declaration: any): MethodIR[] {
  if (!declaration.members) return [];
  
  return declaration.members
    .filter((member: any) => member.kind === 'method' && member.privacy !== 'private')
    .map((method: any): MethodIR => ({
      name: method.name,
      description: method.description,
      parameters: method.parameters?.map((param: any): ParameterIR => ({
        name: param.name,
        type: mapTypeScriptToScala(param.type?.text || 'js.Any'),
        optional: param.optional,
        description: param.description
      })) || [],
      returnType: method.return?.type?.text ? mapTypeScriptToScala(method.return.type.text) : 'Unit',
      public: true
    }));
}

function parseComponent(module: Module): ComponentIR | null {
  // Find the main component declaration (class with customElement: true)
  const componentDeclaration = module.declarations.find(
    (decl: any) => decl.kind === 'class' && decl.customElement
  ) as any;
  
  if (!componentDeclaration) return null;
  
  const tagName = componentDeclaration.tagName;
  if (!tagName || !tagName.startsWith('wa-')) return null;
  
  return {
    name: componentDeclaration.name,
    tagName: tagName,
    packagePath: generatePackagePath(tagName),
    description: componentDeclaration.summary || componentDeclaration.description,
    documentation: componentDeclaration.documentation,
    since: componentDeclaration.since,
    
    attributes: parseAttributes(componentDeclaration),
    events: parseEvents(componentDeclaration),
    slots: parseSlots(componentDeclaration),
    cssProperties: parseCSSProperties(componentDeclaration),
    cssParts: parseCSSParts(componentDeclaration),
    methods: parseMethods(componentDeclaration),
    
    dependencies: componentDeclaration.dependencies || []
  };
}

async function processModule(module: Module): Promise<ComponentIR | null> {
  console.log('Processing module:', module.path);
  
  const component = parseComponent(module);
  if (component) {
    console.log(`  -> Found component: ${component.name} (${component.tagName})`);
    console.log(`     Attributes: ${component.attributes.length}`);
    console.log(`     Events: ${component.events.length}`);
    console.log(`     Slots: ${component.slots.length}`);
    console.log(`     CSS Properties: ${component.cssProperties.length}`);
    console.log(`     Methods: ${component.methods.length}`);
  }
  
  return component;
}

export async function generateIR(): Promise<{ components: number }> {
  console.log('=== WebAwesome Laminar IR Generation ===');
  
  const promises = manifest.modules.map(processModule);
  const results = await Promise.all(promises);
  
  // Filter out null results and create the final IR
  const components = results.filter((comp): comp is ComponentIR => comp !== null);
  
  console.log(`\nProcessed ${components.length} components total`);
  
  // Create comprehensive IR object
  const ir = {
    schemaVersion: '1.0.0',
    sourceManifest: {
      schemaVersion: manifest.schemaVersion,
      modulesCount: manifest.modules.length
    },
    generated: new Date().toISOString(),
    components: components,
    
    // Summary statistics
    summary: {
      totalComponents: components.length,
      totalAttributes: components.reduce((sum, c) => sum + c.attributes.length, 0),
      totalEvents: components.reduce((sum, c) => sum + c.events.length, 0),
      totalSlots: components.reduce((sum, c) => sum + c.slots.length, 0),
      totalCSSProperties: components.reduce((sum, c) => sum + c.cssProperties.length, 0),
      totalMethods: components.reduce((sum, c) => sum + c.methods.length, 0)
    }
  };
  
  // Write IR to file
  const irJson = JSON.stringify(ir, null, 2);
  await writeFile('scripts/webawesome-laminar-ir.json', irJson);
  
  console.log('\n=== IR Generation Complete ===');
  console.log(`Components: ${ir.summary.totalComponents}`);
  console.log(`Attributes: ${ir.summary.totalAttributes}`);
  console.log(`Events: ${ir.summary.totalEvents}`);
  console.log(`Slots: ${ir.summary.totalSlots}`);
  console.log(`CSS Properties: ${ir.summary.totalCSSProperties}`);
  console.log(`Methods: ${ir.summary.totalMethods}`);
  console.log('\nIR saved to: scripts/webawesome-laminar-ir.json');
  
  // Show sample components
  console.log('\nSample components:');
  components.slice(0, 5).forEach(comp => {
    console.log(`  - ${comp.name} (${comp.tagName})`);
  });

  return { components: components.length };
}

async function main() {
  await generateIR();
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}