import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AsciiCharacterComponent} from "./ascii-character/ascii-character.component";
import {AsciiComponent} from "./component/ascii.component";
import {AsciiOnGridDivComponent} from "./ascii-on-grid-div/ascii-on-grid-div.component";
import {AsciiLineComponent} from "./ascii-line/ascii-line.component";
import {AsciiHardDivComponent} from "./ascii-hard-div/ascii-hard-div.component";
import {AsciiModalComponent} from "./ascii-modal/ascii-modal.component";
import {AsciiDivComponent} from "./ascii-div/ascii-div.component";


@NgModule({
  declarations: [AsciiCharacterComponent,
    AsciiComponent, AsciiDivComponent,
    AsciiOnGridDivComponent,
    AsciiLineComponent,
    AsciiHardDivComponent,
    AsciiModalComponent],
  exports: [
    AsciiCharacterComponent,
    AsciiComponent, AsciiDivComponent,
    AsciiOnGridDivComponent,
    AsciiLineComponent,
    AsciiHardDivComponent,
    AsciiModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AsciiModule {
}
