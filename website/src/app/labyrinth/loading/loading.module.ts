import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AsciiModule} from "../../utils/ascii/ascii.module";
import {LoadingComponent} from "../loading/loading.component";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [LoadingComponent
    ],
  imports: [
    CommonModule,
    BrowserModule,
    AsciiModule,

  ],
    exports: [LoadingComponent]
})
export class LoadingModule {
}
