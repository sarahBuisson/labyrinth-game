import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import {Button} from '@storybook/angular/demo';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LevelViewComponent} from "./level-view.component";
import {AsciiHardDivComponent} from "../../../utils/ascii/ascii-hard-div/ascii-hard-div.component";
import {AppModule} from "../../../app.module";
import {AsciiComponent} from "../../../utils/ascii/component/ascii.component";
import {AsciiOnGridDivComponent} from "../../../utils/ascii/ascii-on-grid-div/ascii-on-grid-div.component";
import {Router, RouterModule} from "@angular/router";
import {AppRoutingModule} from "../../../app-routing.module";
import {CharacterFormComponent} from "../../../characterEditor/character-form/character-form.component";
import {NewLabyrinthFormComponent} from "../../new-form/new-labyrinth-form.component";
import {LabyrinthGameModule} from "../labyrinth-game.module";
import {AsciiModule} from "../../../utils/ascii/ascii.module";
import {MenuComponent} from "../../menu/menu.component";
import {Component} from "@angular/core";
import {APP_BASE_HREF} from "@angular/common";


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

@Component({
  selector: 'router-outlet',
  template: `
    <div>
    routeroutlet </div>
  `,
})
class RouterOutletMockComponent {}
export const Default = () => ({
  component: LevelViewComponent,
  moduleMetadata: {
    declarations: [
      NewLabyrinthFormComponent,
      CharacterFormComponent,
      MenuComponent,
      RouterOutletMockComponent],  // Removed if no template
    imports: [
      BrowserAnimationsModule,
      AppRoutingModule,
      RouterModule.forRoot([{
        path: '*',
        component: RouterOutletMockComponent
      }]),
      LabyrinthGameModule,
      AsciiModule],
    providers: [   { provide: APP_BASE_HREF, useValue: '/' },]
  },

  template: `<div style="background: red">
<level-view>
  </level-view></div> `,
  props: {
    currentPartieProxy: {
      level: {contentArray: [[{x: 0, y: 0}, {}, {}], [{}, {}, {}], [{}, {}, {}]]},
      player: {location: {x: 1, y: 0}}
    }
  },
});

