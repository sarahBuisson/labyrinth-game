import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AsciiOnGridDivComponent} from "./ascii-on-grid-div.component";
import {AsciiInsideGridDivComponent} from "./ascii-inside-grid.component";



@NgModule({
  declarations: [
    AsciiOnGridDivComponent,
    AsciiInsideGridDivComponent

  ],exports: [
    AsciiOnGridDivComponent,
    AsciiInsideGridDivComponent

  ],
  imports: [
    CommonModule
  ]
})
export class AsciiGridModule { }
