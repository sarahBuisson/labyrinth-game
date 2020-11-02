import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AsciiCharacterComponent} from "./ascii-character/ascii-character.component";
import {AsciiComponent} from "./component/ascii.component";
import {AsciiLineComponent} from "./ascii-line/ascii-line.component";
import {AsciiModalComponent} from "./ascii-modal/ascii-modal.component";
import {AsciiBorderComponent} from "./ascii-border/ascii-border.component";
import { AsciiButtonComponent } from './ascii-button/ascii-button.component';
import { BrowserModule} from '@angular/platform-browser';
import {AsciiGridModule} from "./ascii-on-grid-div/ascii-grid.module";

@NgModule({
  declarations: [
    AsciiCharacterComponent,
    AsciiComponent,
    AsciiBorderComponent,
    AsciiLineComponent,
    AsciiModalComponent,
    AsciiButtonComponent,
  ],
  exports: [
    AsciiCharacterComponent,
    AsciiComponent,
    AsciiBorderComponent,
    AsciiLineComponent,
    AsciiModalComponent,
    AsciiButtonComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AsciiGridModule
  ]
})
export class AsciiModule {
}
