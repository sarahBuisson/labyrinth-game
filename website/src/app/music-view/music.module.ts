import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MusicViewComponent} from "./music-view.component";
import {PartitionViewComponent} from "./partition-view/partition-view.component";
import {TempViewComponent} from "./partition-view/temp-view/temp-view.component";
import {AsciiModule} from "../utils/ascii/ascii.module";


@NgModule({
  declarations: [MusicViewComponent, PartitionViewComponent, TempViewComponent],
  exports: [
    PartitionViewComponent
  ],
  imports: [
    CommonModule,
    AsciiModule
  ]
})
export class MusicModule {
}
