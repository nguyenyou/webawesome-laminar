import { describe, expect, test } from 'bun:test';
import path from 'node:path';
import { paths } from './utils.js';

const ir = await Bun.file(paths.ir).json();
const mapping = await Bun.file(paths.sharedTypesMapping).json();
const readComponent = (name: string) => Bun.file(path.join(paths.webawesomeLaminarDir, `${name}.scala`)).text();
const attribute = (tagName: string, name: string) =>
  ir.components.find((component: any) => component.tagName === tagName).attributes
    .find((attribute: any) => attribute.name === name);

describe('WebAwesome generated API', () => {
  test('preserves literal choices hidden behind TypeScript aliases', () => {
    expect(attribute('wa-icon', 'canvas').unionValues).toEqual(['fixed', 'auto', 'square', 'roomy']);
    expect(attribute('wa-icon', 'animation').unionValues).toContain('spin-snap-8');
    expect(attribute('wa-known-date', 'size').unionValues).toEqual([
      'xs', 's', 'm', 'l', 'xl', 'small', 'medium', 'large'
    ]);
    expect(attribute('wa-time-input', 'hour-format').unionValues).toEqual(['auto', '12', '24']);
    expect(attribute('wa-time-input', 'placement').unionValues).toContain('bottom-end');
  });

  test('shared keys always write the requested HTML attribute', async () => {
    const commonKeys = await readComponent('CommonKeys');
    const keyAttributes = new Map(
      [...commonKeys.matchAll(/object\s+(\w+)\s+extends\s+HtmlAttr\[[^\]]+\]\s*\(\s*"([^"]+)"/g)]
        .map(match => [match[1], match[2]])
    );
    expect(keyAttributes.size).toBe(mapping.sharedTypes.length);
    for (const component of ir.components) {
      const name = component.tagName === 'wa-option' ? 'UOption' : component.tagName.slice(3)
        .split('-').map((part: string) => part[0].toUpperCase() + part.slice(1)).join('');
      const source = await readComponent(name);
      for (const match of source.matchAll(/lazy val\s+(`?\w+`?)\s*:\s*CommonKeys\.(\w+)\.type/g)) {
        const attributeName = match[1].replaceAll('`', '');
        const attr = component.attributes.find((attr: any) =>
          (attr.fieldName ?? attr.name.replace(/-([a-z])/g, (_: string, letter: string) => letter.toUpperCase())) === attributeName
        );
        // typ/tpe and forId are aliases of existing keys.
        if (attr) expect(keyAttributes.get(match[2])).toBe(attr.name);
      }
    }
  });

  test('supports object swatches, functional pagination links, and unrestricted time steps', async () => {
    expect(await readComponent('ColorPicker')).toContain('var swatches: String | js.Array[String] | js.Array[ColorPicker.Swatch]');
    expect(await readComponent('ColorPicker')).toContain('swatchesProp: HtmlProp[');
    expect(await readComponent('Pagination')).toContain('var hrefTemplate: String | js.Function1[Double, String]');
    expect(await readComponent('Pagination')).toContain('hrefTemplateProp: HtmlProp[');
    expect(await readComponent('TimeInput')).toContain('var step: Double | "any"');
  });

  test('preserves inferred and inherited method results and optional arguments', async () => {
    const timeInput = await readComponent('TimeInput');
    expect(timeInput).toContain('def checkValidity(): Boolean');
    expect(timeInput).toContain('def reportValidity(): Boolean');
    expect(timeInput).toContain('def getForm(): dom.html.Form | Null');
    expect(timeInput).toContain('def focus(options: js.UndefOr[js.Any] = js.undefined): Unit');
    expect(await readComponent('RandomContent')).toContain('def randomize(): js.Array[dom.Element]');
  });

  test('exposes the new events with their payload types', async () => {
    for (const [component, events] of [
      ['Pagination', ['WaBeforePageChangeEvent', 'WaPageChangeEvent']],
      ['Stepper', ['WaBeforeStepChangeEvent', 'WaStepChangeEvent']],
      ['RandomContent', ['WaContentChangeEvent']],
      ['TagInput', ['WaCreateEvent']]
    ] as const) {
      const source = await readComponent(component);
      for (const event of events) expect(source).toContain(`EventDetail[${event}]`);
    }
  });

  test('every generated component imports an installed registration module', async () => {
    expect(ir.components).toHaveLength(72);
    for (const component of ir.components) {
      const name = component.tagName.slice(3);
      expect(await Bun.file(path.join(paths.workspace, 'node_modules/@awesome.me/webawesome/dist/components', name, `${name}.js`)).exists()).toBe(true);
    }
  });
});
