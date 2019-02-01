import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { NxCollapsibleItemComponent } from 'nx-collapsible-item';

const styles = `
<style>
p \{
  font-family: sans-serif;
  font-size: 16px;
\}

.elements-list \{
  display: flex;
  flex-direction: column;
  align-items: center;
\}

.brd \{
  border: 2px solid rgba(36, 35, 35, 0.418);
  border-radius: 8px;
  margin: 10px;
 \}
 </style>
`;

storiesOf('Nx-collapsible-item', module)
  .add('with text', () => ({
    moduleMetadata: {
      declarations: [NxCollapsibleItemComponent],
    },
    template: `
    ${styles}
    <span> It works </span>
    <div class="elements-list">
      <enl-nx-collapsible-item
        class="brd"
      >
          <div collapsible-item-header>
            <p>1. Ivan</p>
          </div>
          <div collapsible-item-body>
              <p>Age: 18</p>
              <p>Country: Ru</p>
              <p>Score: 70</p>
          </div>
      </enl-nx-collapsible-item>
    </div>
    `
  }));
