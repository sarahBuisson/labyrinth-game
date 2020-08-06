import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LabyrinthGameComponent} from "./labyrinth-game.component";
import {SlidingComponent} from "../../utils/ui/atom/sliding/sliding.component";
import {KeypadFormComponent} from "./keypad-form/keypad-form.component";
import {AsciiModule} from "../../utils/ascii/ascii.module";
import {LevelViewComponent} from "./level-view/level-view.component";
import {MapViewComponent} from "./map-view/map-view.component";
import {InventoryViewComponent} from "./inventory-view/inventory-view.component";


@NgModule({
  declarations: [LabyrinthGameComponent,
    SlidingComponent,
    KeypadFormComponent,
    LevelViewComponent,
    MapViewComponent,
    KeypadFormComponent,
    InventoryViewComponent],
  imports: [
    CommonModule,
    AsciiModule
  ],
  exports: [LabyrinthGameComponent,
    SlidingComponent,
    KeypadFormComponent,
    LevelViewComponent,
    MapViewComponent,
    KeypadFormComponent,
    InventoryViewComponent]
})
export class LabyrinthGameModule {
}
