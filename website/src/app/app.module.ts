import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CharacterFormComponent} from './characterEditor/character-form/character-form.component';
import {NewLabyrinthFormComponent} from './labyrinth/new-form/new-labyrinth-form.component';
import {MenuComponent} from './labyrinth/menu/menu.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AsciiModule} from "./utils/ascii/ascii.module";
import {LabyrinthGameModule} from "./labyrinth/game-view/labyrinth-game.module";
import { SoundComponent } from './utils/ui/atom/sound/sound.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacterFormComponent,
    NewLabyrinthFormComponent,
    MenuComponent,
    SoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AsciiModule,
    LabyrinthGameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
