import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
import { AsciiHardDivComponent } from './utils/ascii/ascii-hard-div/ascii-hard-div.component';
import { MenuComponent } from './labyrinth/menu/menu.component';
import { NewFormComponent } from './labyrinth/new-form/new-form.component';
import {AsciiLineComponent} from "./utils/ascii/ascii-line/ascii-line.component";
import { AsciiModalComponent } from './utils/ascii/ascii-modal/ascii-modal.component';
import { GeoObjectComponent } from './labyrinth/labyrinth-game/zone/geo-object/geo-object.component';
import {AsciiDivComponent} from "./utils/ascii/ascii-div/ascii-div.component";

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
    AsciiHardDivComponent,
    AsciiDivComponent,
    AsciiLineComponent,
    MenuComponent,
    NewFormComponent,
    AsciiModalComponent,
    GeoObjectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
