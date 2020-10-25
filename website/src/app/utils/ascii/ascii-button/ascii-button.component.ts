import { Component, OnInit } from '@angular/core';
import {defaultButtonBorderTemplate}  from "../../../labyrinth/service/render/resources/border";
@Component({
  selector: 'app-ascii-button',
  template: '<span ascii-border class="ihm-ui" contentClass="text interact-ui" [computeRenderEachTime]="false" [borderTemplate]="defaultButtonBorderTemplate" ><ng-content></ng-content></span>',
  styleUrls: ['./ascii-button.component.css']
})
export class AsciiButtonComponent implements OnInit {
  label: string;
  defaultButtonBorderTemplate = defaultButtonBorderTemplate

  constructor() {
  }

  ngOnInit(): void {
  }

}
