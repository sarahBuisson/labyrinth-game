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


export const NearTheBorder = () => ({
  component: SlidingComponent,
  moduleMetadata: {
    declarations: [SlidingComponent], // Removed if no template
    imports: [BrowserAnimationsModule]
  },

  template: `<div style="border:solid black 1px"> <app-sliding
    [openData]="{
  right: '-10px',
  top: '10px',

  color: 'red'
  }
  "
    [closeData]="{
  right: '50px',
  top: '10px',
     color: 'green'}"
  >
    XXXXXXXXXXXXXXXXXXX
  </app-sliding></div>`,
  props: {
    openData: {
      right: '10px',
    },
    closeData: {
      right: '100px',
    },
  },
});

export const FullBorderSlide = () => ({
  component: SlidingComponent,
  moduleMetadata: {
    declarations: [SlidingComponent], // Removed if no template
    imports: [BrowserAnimationsModule]
  },

  template: `<div style="border:solid black 1px; width:100px;position:absolute; right:0px;"> <app-sliding
    [openData]="{
  right: '-10px',
  top: '10px',
  transform: 'translateX(-50%)',
  color: 'red'
  }"
    [closeData]="{
  right: '-10px',
  top: '10px',
  transform: 'translateX(0)',
  color: 'green'}"
  >
    XXXXXXXXXXXXXXXXXXX
  </app-sliding></div>`,
  props: {
    openData: {
      right: '10px',
    },
    closeData: {
      right: '100px',
    },
  },
});


export const Click = () => ({
  component: SlidingComponent,
  moduleMetadata: {
    declarations: [SlidingComponent], // Removed if no template
    imports: [BrowserAnimationsModule]
  },

  template: `<div style="border:solid black 1px"> <app-sliding
 slideOnlyOnClick="true"
    [openData]="{
  right: '-10px',
  top: '10px',

  color: 'red'
  }
  "
    [closeData]="{
  right: '50px',
  top: '10px',
     color: 'green'}"
  >
    XXXXXXXXXXXXXXXXXXX
  </app-sliding></div>`,
  props: {
    openData: {
      right: '10px',
    },
    closeData: {
      right: '100px',
    },
  },
});
