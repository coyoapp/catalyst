import { newSpecPage } from '@stencil/core/testing';
import { CatScrollable } from './cat-scrollable';

describe('cat-scrollable', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CatScrollable],
      html: `<cat-scrollable></cat-scrollable>`
    });
    expect(page.root).toEqualLightHtml(`
      <cat-scrollable></cat-scrollable>
    `);
  });
});
