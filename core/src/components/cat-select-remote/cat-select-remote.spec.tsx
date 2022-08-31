import { newSpecPage } from '@stencil/core/testing';
import { CatSelectRemote } from './cat-select-remote';

describe('cat-select-remote', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CatSelectRemote],
      html: `<cat-select-remote></cat-select-remote>`
    });
    expect(page.root).toEqualHtml(`
      <cat-select-remote>
        <mock:shadow-root>
          <div aria-controls="select-listbox-cat-input-0" class="select-wrapper" id="cat-input-0" role="combobox">
           <div class="select-wrapper-inner">
             <input aria-controls="select-listbox-cat-input-0" class="select-input" value="">
           </div>
           <cat-button a11ylabel="" aria-controls="select-listbox-cat-input-0" class="select-btn" icon="chevron-down-outlined" icononly="" size="s" tabindex="-1" variant="text"></cat-button>
         </div>
         <div class="select-dropdown"></div>
        </mock:shadow-root>
      </cat-select-remote>
    `);
  });
});
