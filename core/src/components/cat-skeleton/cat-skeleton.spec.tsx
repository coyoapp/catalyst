import { newSpecPage } from '@stencil/core/testing';
import { CatSkeleton } from './cat-skeleton';

describe('cat-skeleton', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CatSkeleton],
      html: `<cat-skeleton></cat-skeleton>`
    });
    expect(page.root).toEqualLightHtml(`
      <cat-skeleton></cat-skeleton>
    `);
  });
});
