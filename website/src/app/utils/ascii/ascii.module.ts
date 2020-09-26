import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AsciiCharacterComponent} from "./ascii-character/ascii-character.component";
import {AsciiComponent} from "./component/ascii.component";
import {AsciiOnGridDivComponent} from "./ascii-on-grid-div/ascii-on-grid-div.component";
import {AsciiLineComponent} from "./ascii-line/ascii-line.component";
import {AsciiModalComponent} from "./ascii-modal/ascii-modal.component";
import {AsciiDivComponent} from "./ascii-div/ascii-div.component";
import { AsciiButtonComponent } from './ascii-button/ascii-button.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AsciiCharacterComponent,
    AsciiComponent, AsciiDivComponent,
    AsciiOnGridDivComponent,
    AsciiLineComponent,
    AsciiModalComponent,
    AsciiButtonComponent,
    ],
    exports: [
        AsciiCharacterComponent,
        AsciiComponent, AsciiDivComponent,
        AsciiOnGridDivComponent,
        AsciiLineComponent,
        AsciiModalComponent, AsciiButtonComponent
    ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class AsciiModule {
}
