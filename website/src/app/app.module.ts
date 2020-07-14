import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterFormComponent } from './characterEditor/character-form/character-form.component';
import { LabyrinthFormComponent } from './labyrinth/labyrinth-form/labyrinth-form.component';
import { LabyrinthGameComponent } from './labyrinth/labyrinth-game/labyrinth-game.component';
import { AsciiComponent } from './utils/ascii/component/ascii.component';
import { LevelViewComponent } from './labyrinth/labyrinth-game/level-view/level-view.component';
import {MapViewComponent} from "./labyrinth/labyrinth-game/map-view/map-view.component";
import { AsciiHardDivComponent } from './utils/ascii/ascii-hard-div/ascii-hard-div.component';
import { MenuComponent } from './labyrinth/menu/menu.component';
import { NewFormComponent } from './labyrinth/new-form/new-form.component';
import {AsciiLineComponent} from "./utils/ascii/ascii-line/ascii-line.component";
import { AsciiModalComponent } from './utils/ascii/ascii-modal/ascii-modal.component';
import {AsciiDivComponent} from "./utils/ascii/ascii-div/ascii-div.component";
import { InventoryComponent } from './labyrinth/labyrinth-game/inventory/inventory.component';
import { AsciiCharacterComponent } from './utils/ascii/ascii-character/ascii-character.component';
import { AsciiOnGridDivComponent } from './utils/ascii/ascii-on-grid-div/ascii-on-grid-div.component';
import { SlidingComponent } from './utils/ui/atom/sliding/sliding.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    CharacterFormComponent,
    LabyrinthFormComponent,
    LabyrinthGameComponent,
    AsciiComponent,
    LevelViewComponent,
    MapViewComponent,
    AsciiHardDivComponent,
    AsciiDivComponent,
    AsciiLineComponent,
    MenuComponent,
    NewFormComponent,
    AsciiModalComponent,
    InventoryComponent,
    AsciiCharacterComponent,
    AsciiOnGridDivComponent,
    SlidingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
