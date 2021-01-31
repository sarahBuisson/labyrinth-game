import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LabyrinthGameComponent} from "./labyrinth-game.component";
import {SlidingComponent} from "../../utils/ui/atom/sliding/sliding.component";
import {KeypadFormComponent} from "./keypad-form/keypad-form.component";
import {AsciiModule} from "../../utils/ascii/ascii.module";
import {LevelViewComponent} from "./level-view/level-view.component";
import {MapViewComponent} from "./map-view/map-view.component";
import {InventoryViewComponent} from "./inventory-view/inventory-view.component";
import { ZoneViewComponent } from './level-view/zone-view/zone-view.component';
import {BrowserModule} from "@angular/platform-browser";
import {LoadingComponent} from "../loading/loading.component";
import {LoadingModule} from "../loading/loading.module";
import {AppRoutingModule} from "../../app-routing.module";



@NgModule({
  declarations: [LabyrinthGameComponent,
    SlidingComponent,
    KeypadFormComponent,
    LevelViewComponent,
    MapViewComponent,
    KeypadFormComponent,
    InventoryViewComponent,
    ZoneViewComponent
    ],
  imports: [
    CommonModule,
    BrowserModule,
    AsciiModule,
    LoadingModule,
    AppRoutingModule
  ],
    exports: [LabyrinthGameComponent,
        SlidingComponent,
        KeypadFormComponent,
        LevelViewComponent,
        MapViewComponent,
        KeypadFormComponent,
        InventoryViewComponent,
      ZoneViewComponent]
})
export class LabyrinthGameModule {
}
