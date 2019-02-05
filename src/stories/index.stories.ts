import { storiesOf } from '@storybook/angular';
import { NxCollapsibleItemComponent } from 'nx-collapsible-item';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs } from '@storybook/addon-knobs';
import * as marked from 'marked';
import defaultText from './default.md';
import listOfTheComponents from './list-of-the-components.md';
import shortHeaderLongBody from './short-header-long-body.md';
import longHeaderShortBody from './long-header-short-body.md';

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

 .btn \{
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: block;
  margin: 8px auto;
  font-size: 16px;
  cursor: pointer;
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
  })))
  .add(
    'A list of the components',
    withNotes({text: marked(listOfTheComponents)})(() => ({
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
              <p>1. Vasilii Ivanov</p>
            </div>
            <div collapsible-item-body>
                <p>Age: 18</p>
                <p>Country: Russia</p>
                <p>Score: 50%</p>
            </div>
        </enl-nx-collapsible-item>
        <enl-nx-collapsible-item
          class="brd"
        >
            <div collapsible-item-header>
              <p>2. Ivan Vasilev</p>
            </div>
            <div collapsible-item-body>
                <p>Age: 20</p>
                <p>Country: Russia</p>
                <p>Score: 70%</p>
            </div>
        </enl-nx-collapsible-item>
        <enl-nx-collapsible-item
          class="brd"
        >
            <div collapsible-item-header>
              <p>3. Petr Petrov</p>
            </div>
            <div collapsible-item-body>
                <p>Age: 21</p>
                <p>Country: Russia</p>
                <p>Score: 90%</p>
            </div>
        </enl-nx-collapsible-item>
       </div>
      `
    })))
    .add(
      'Short, long + buttons and imgs in the body',
      withNotes({text: marked(shortHeaderLongBody)})(() => ({
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
                <p>Lorem</p>
              </div>
              <div collapsible-item-body>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                  Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                  Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                  imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                  Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
                  porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
                  feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                  Aenean imperdiet.
                </p>
                <img src="https://images.all-free-download.com/images/graphicthumb/beautiful_scenery_04_hd_pictures_166258.jpg"
                alt="some img"/>
                <p>
                  Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                  Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                  sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
                  blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
                  Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget
                  eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                  Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero.
                  Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
                  Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante i
                </p>
                <button class="btn">I'm not a real button, just an example</button>
              </div>
          </enl-nx-collapsible-item>
         </div>
        `
      })))
    .add(
      'Long, short + buttons and imgs in the header',
      withNotes({text: marked(longHeaderShortBody)})(() => ({
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
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                  Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                  Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                  imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                  Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
                  porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
                  feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                  Aenean imperdiet.
                </p>
                <img src="https://images.all-free-download.com/images/graphicthumb/beautiful_scenery_04_hd_pictures_166258.jpg"
                alt="some img"/>
                <p>
                  Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                  Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                  sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
                  blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
                  Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget
                  eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                  Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero.
                  Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
                  Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante i
                </p>
                <button class="btn">I'm not a real button, just an example</button>
              </div>
              <div collapsible-item-body>
                <p>Lorem</p>
              </div>
          </enl-nx-collapsible-item>
         </div>
        `
      })));
