import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { NxCollapsibleItemComponent } from 'nx-collapsible-item';

/* storiesOf('Welcome', module).add('to Storybook', () => ({
  component: NxCollapsibleItemComponent,
  props: {},
})); */

storiesOf('Nx-collapsible-item', module)
  .add('with text', () => ({
    moduleMetadata: {
      declarations: [NxCollapsibleItemComponent],
    },
    template: `
  <enl-nx-collapsible-item
    *ngFor="let item of items"
    [item]="item"
    class="brd"
  >
      <collapsible-item-header>
        <p>{{ item.id }}. {{item.name}}</p>
      </collapsible-item-header>
      <collapsible-item-body>
          <p>Age: {{item.age}}</p>
          <p>Country: {{item.country}}</p>
          <p>Score: {{item.score}}</p>
      </collapsible-item-body>
  </enl-nx-collapsible-item>`
  }));

/* storiesOf('Another Button', module).add('button with link to another story', () => ({
  component: NxCollapsibleItemComponent,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
})); */
