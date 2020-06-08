import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './utils/grid/grid.component';
import { GridCaseComponent } from './utils/grid-case/grid-case.component';
import { CharacterFormComponent } from './characterEditor/character-form/character-form.component';
import { LabyrinthFormComponent } from './labyrinth/labyrinth-form/labyrinth-form.component';
import { LabyrinthGameComponent } from './labyrinth/labyrinth-game/labyrinth-game.component';
import { ZoneComponent } from './labyrinth/labyrinth-game/zone/zone.component';
import { AsciiComponent } from './utils/ascii/component/ascii.component';
import { LevelViewComponent } from './labyrinth/labyrinth-game/level-view/level-view.component';
import {MapViewComponent} from "./labyrinth/labyrinth-game/map-view/map-view.component";

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    GridCaseComponent,
    CharacterFormComponent,
    LabyrinthFormComponent,
    LabyrinthGameComponent,
    ZoneComponent,
    AsciiComponent,
    LevelViewComponent,
    MapViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
