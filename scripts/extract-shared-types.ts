import { readFile, writeFile } from './utils.js';

interface AttributeIR {
  name: string;
  unionValues?: string[];
}

interface ComponentIR {
  name: string;
  tagName: string;
  attributes: AttributeIR[];
}

interface UnionTypeInfo {
  values: string[];
  signature: string;
  attributeName: string;
  components: string[];
  frequency: number;
}

interface SharedType {
  name: string;
  values: string[];
  signature: string;
  frequency: number;
  components: string[];
  description: string;
}

// Create a map to track usage and resolve naming conflicts
const unionTypeMap = new Map<string, UnionTypeInfo>();
const sharedTypes: SharedType[] = [];

function sanitizeTypeName(name: string): string {
  // Convert kebab-case to PascalCase and remove invalid characters
  return name
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
    .replace(/[^a-zA-Z0-9]/g, '');
}

function generateSemanticName(attributeName: string, values: string[], frequency: number, componentName?: string): string {
  const baseName = (() => {
    switch (attributeName) {
      case 'variant':
        if (values.includes('neutral') && values.includes('brand')) {
          return 'ThemeVariant';
        }
        return 'Variant';
      
      case 'size':
        if (values.includes('small') && values.includes('medium') && values.includes('large')) {
          return 'ComponentSize';
        }
        return 'Size';
      
      case 'appearance':
        if (values.includes('filled') && values.includes('outlined')) {
          if (values.length === 2) {
            return 'FilledOutlineAppearance';
          } else if (values.includes('accent')) {
            return 'ExtendedAppearance';
          }
        }
        return 'Appearance';
      
      case 'orientation':
        return 'Orientation';
      
      case 'type':
        if (values.includes('button') && values.includes('submit')) {
          return 'ButtonType';
        }
        if (values.includes('date') && values.includes('email')) {
          return 'InputType';
        }
        return 'ElementType';
      
      case 'target':
        return 'LinkTarget';
      
      case 'placement':
        if (values.includes('top') && values.includes('bottom')) {
          if (values.length === 4 && values.includes('left') && values.includes('right')) {
            return 'TooltipPlacement';
          } else if (values.includes('start') && values.includes('end')) {
            return 'ComponentPlacement';
          }
        }
        return 'Placement';
      
      case 'loading':
        return 'LoadingStrategy';
      
      case 'display':
        return 'DisplayFormat';
      
      case 'year':
      case 'month':
        return sanitizeTypeName(`Date${attributeName.charAt(0).toUpperCase() + attributeName.slice(1)}Format`);
      
      default:
        return sanitizeTypeName(attributeName.charAt(0).toUpperCase() + attributeName.slice(1));
    }
  })();
  
  // For single-use types, include component name for clarity
  if (frequency === 1 && componentName) {
    const cleanComponentName = componentName.replace('Wa', '');
    return `${cleanComponentName}${baseName}`;
  }
  
  return baseName;
}

export async function extractSharedTypes(): Promise<void> {
  console.log('=== Extracting Shared Union Types ===');
  
  // Clear previous state
  unionTypeMap.clear();
  sharedTypes.length = 0;
  
  // Load the IR
  const irData = JSON.parse(await readFile('scripts/webawesome-laminar-ir.json'));
  const components: ComponentIR[] = irData.components;
  
  // Collect all union types
  components.forEach(component => {
    component.attributes.forEach(attr => {
      if (attr.unionValues && attr.unionValues.length > 0) {
        const values = [...attr.unionValues].sort();
        const signature = values.join('|');
        
        if (!unionTypeMap.has(signature)) {
          unionTypeMap.set(signature, {
            values,
            signature,
            attributeName: attr.name,
            components: [],
            frequency: 0
          });
        }
        
        const unionInfo = unionTypeMap.get(signature)!;
        unionInfo.components.push(component.name);
        unionInfo.frequency++;
      }
    });
  });
  
  // Include ALL union types (both shared and single-use)
  const allUnionTypes = Array.from(unionTypeMap.values())
    .sort((a, b) => b.frequency - a.frequency);
  
  // Generate shared types with unique names
  const usedNames = new Set<string>();
  
  allUnionTypes.forEach((unionType: UnionTypeInfo) => {
    // For single-use types, use the first component name for clarity
    const componentName = unionType.frequency === 1 ? unionType.components[0] : undefined;
    let typeName = generateSemanticName(unionType.attributeName, unionType.values, unionType.frequency, componentName);
    let counter = 1;
    const originalName = typeName;
    
    // Handle naming conflicts
    while (usedNames.has(typeName)) {
      typeName = `${originalName}${counter}`;
      counter++;
    }
    usedNames.add(typeName);

    // Special case for Button
    if(["ExtendedAppearance", "BadgeExtendedAppearance"].includes(typeName)) {
      unionType.values = [...unionType.values, "filled outlined"]
    }

    const sharedType: SharedType = {
      name: typeName,
      values: unionType.values,
      signature: unionType.signature,
      frequency: unionType.frequency,
      components: unionType.components,
      description: unionType.frequency > 1 
        ? `Used by ${unionType.frequency} components for "${unionType.attributeName}" attribute`
        : `Used by ${unionType.components[0]} for "${unionType.attributeName}" attribute`
    };
    
    sharedTypes.push(sharedType);
  });
  
  console.log(`\nExtracted ${sharedTypes.length} union types (shared and single-use):`);
  sharedTypes.forEach((st, i) => {
    console.log(`${i + 1}. ${st.name} (${st.frequency} components)`);
  });
  
  // Generate SharedTypes.scala file
  await generateSharedTypesFile();
  
  // Save mapping for component generation
  await saveSharedTypesMapping();
  
  console.log('\nUnion types extraction completed!');
}

async function generateSharedTypesFile() {
  const scalaCode = `package io.github.nguyenyou.webawesome.laminar

/** All union types used by WebAwesome components. This file is generated at compile-time by WebAwesome generator.
  */
object SharedTypes {

${sharedTypes.map(st => {
  const typeDefinition = st.values.map(v => `"${v}"`).join(' | ');
  const componentList = st.components.slice(0, 3).join(', ') + (st.components.length > 3 ? ', ...' : '');
  
  return `  /** ${st.description}. Components: ${componentList} */
  type ${st.name} = ${typeDefinition}`;
}).join('\n\n')}

}
`;

  await writeFile('webawesome-laminar/src/io/github/nguyenyou/webawesome/laminar/SharedTypes.scala', scalaCode);
  console.log('✓ Generated SharedTypes.scala');
}

async function saveSharedTypesMapping() {
  const mapping = {
    sharedTypes: sharedTypes.map(st => ({
      name: st.name,
      signature: st.signature,
      values: st.values,
      frequency: st.frequency,
      components: st.components
    }))
  };
  
  await writeFile('scripts/shared-types-mapping.json', JSON.stringify(mapping, null, 2));
  console.log('✓ Generated shared-types-mapping.json');
}

// Export shared types for use in component generation
export { SharedType, sharedTypes };

// Run the extraction when called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  extractSharedTypes().catch(console.error);
} 