import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import {Button} from '@storybook/angular/demo';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MapViewComponent} from "./map-view.component";


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
  title: 'MapViewComponent',
  component: MapViewComponent,
};
export const Default = () => ({
  component: MapViewComponent,
  moduleMetadata: {
    declarations: [MapViewComponent], // Removed if no template
    imports: [BrowserAnimationsModule]
  },

  template: `<div style="background: red">
<app-map-view>
  </app-map-view></div> `,
  props: {
    openData: {
      right: '10px',
    },
    closeData: {
      right: '100px',
    },
  },
});

