import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {compositionUtils, harmoniqueUtils} from "music-generator";

@Component({
  selector: 'app-partition-view',
  template: `<span *ngIf="!partitionForms" class="text">no partition</span>
  <div class="vertical musicForm" *ngFor="let form of partitionForms" [style]="{borderColor:borderColor}">
    <ng-container *ngIf="isPattern(form) ">
      <app-temp-view *ngFor="let note of form" [temp]="note" [scale]="scale"></app-temp-view>
    </ng-container>
    <ng-container *ngIf="isNote(form) ">
      <app-temp-view [temp]="form" [scale]="scale"></app-temp-view>
    </ng-container>
    <ng-container *ngIf="!isNote(form)&&!isPattern(form) ">
      <app-partition-view [partitionForms]="form" [initscale]="scale"></app-partition-view>
    </ng-container>
  </div> `
  ,
  styleUrls: ['./partition-view.component.css']
})
export class PartitionViewComponent implements OnInit, OnChanges {
  @Input()
  partitionForms: Array<any>;
  @Input()
  initscale: any
  scale: any;
  borderColor: string

  constructor() {
  }

  ngOnInit(): void {
    this.borderColor = '#' + Math.round(Math.random() * 9) + Math.round(Math.random() * 9) + Math.round(Math.random() * 9)
  }

  ngOnChanges(): void {
    if (this.initscale)
      this.scale = this.initscale
    else if (this.partitionForms) {
      let tunes = compositionUtils.flatPartition(this.partitionForms).map((n) => n.tune)
      this.scale = harmoniqueUtils.getSuroundingTunes(tunes).sort((a, b) => harmoniqueUtils.getLevel(b) - harmoniqueUtils.getLevel(a));
    }
  }


  isPattern(form: any) {
    return Array.isArray(form) && !Array.isArray(form[0])

  }

  isNote(form: any) {
    return !Array.isArray(form)

  }
}
