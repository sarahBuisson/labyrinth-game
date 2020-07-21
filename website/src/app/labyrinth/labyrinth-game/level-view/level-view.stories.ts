import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import {Button} from '@storybook/angular/demo';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LevelViewComponent} from "./level-view.component";
import {AsciiHardDivComponent} from "../../../utils/ascii/ascii-hard-div/ascii-hard-div.component";
import {AppModule} from "../../../app.module";
import {AsciiComponent} from "../../../utils/ascii/component/ascii.component";
import {AsciiOnGridDivComponent} from "../../../utils/ascii/ascii-on-grid-div/ascii-on-grid-div.component";
import {Router} from "@angular/router";


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
  title: 'LevelViewComponent',
  component: LevelViewComponent,
};
export const Default = () => ({
  component: LevelViewComponent,
  moduleMetadata: {
    declarations: [LevelViewComponent, AsciiHardDivComponent, AsciiComponent,AsciiOnGridDivComponent], // Removed if no template
    imports: [BrowserAnimationsModule]
  },

  template: `<div style="background: red">
level
<app-level-view>
  </app-level-view></div> `,
  props: {
    currentPartieProxy: {
      level: {contentArray: [[{x: 0, y: 0}, {}, {}], [{}, {}, {}], [{}, {}, {}]]},
      player: {location: {x: 1, y: 0}}
    }
  },
});

