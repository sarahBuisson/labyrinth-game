import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import {Button} from '@storybook/angular/demo';
import {SlidingComponent} from "./sliding.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


/*

  <app-sliding
    [openData]="{
  right: '-100px',
  left:'auto'}"
    [closeData]="{
  right: 'auto', left:'100px'}"
  >
    <app-map-view [currentPartieProxy]="currentPartyProxy"
                  [renderService]="mapRenderService"
                  class="map"
    ></app-map-view>
  </app-sliding>

*/
export default {
  title: 'SlidingComponent',
  component: SlidingComponent,
};
export const Default = () => ({
  component: SlidingComponent,
  moduleMetadata: {
    declarations: [SlidingComponent], // Removed if no template
    imports: [BrowserAnimationsModule]
  },

  template: ` <app-sliding
    [openData]="{
  right: '10px',
  top: '10px',

  color: 'red'
  }
  "
    [closeData]="{
  right: '50px',
  top: '50px',
     color: 'green'}"
  >
    XXX
  </app-sliding>`,
  props: {
    openData: {
      right: '10px',
    },
    closeData: {
      right: '100px',
    },
  },
});
