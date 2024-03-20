import { newSpecPage } from '@stencil/core/testing';
import { CatAvatar } from './cat-avatar';

describe('cat-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CatAvatar],
      html: `<cat-avatar label="Label"></cat-avatar>`
    });
    expect(page.root).toEqualLightHtml(`
      <cat-avatar label="Label"></cat-avatar>
    `);
  });
});
