import { storiesOf } from '@storybook/angular';
import { NxCollapsibleItemComponent } from 'nx-collapsible-item';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs } from '@storybook/addon-knobs';
import * as marked from 'marked';
import defaultText from './defaultText.md';

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
.addDecorator(withKnobs)
.add(
  'Install',
  withNotes({text: marked(defaultText)})(() => ({
    moduleMetadata: {
      declarations: [NxCollapsibleItemComponent],
    },
    template: `
    ${styles}
    <div class="elements-list">
      <enl-nx-collapsible-item
        class="brd"
      >
        <div collapsible-item-header>
          <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
        </div>
        <div collapsible-item-body>
            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec. </p>
        </div>
      </enl-nx-collapsible-item>
    </div>
    `
  })));
