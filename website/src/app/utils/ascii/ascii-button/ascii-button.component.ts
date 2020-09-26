import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ascii-button',
  template: '<span ascii-div class="ihm-ui" contentClass="text interact-ui" [computeRenderEachTime]="false" ><ng-content></ng-content></span>',
  styleUrls: ['./ascii-button.component.css']
})
export class AsciiButtonComponent implements OnInit {
  label: string;

  constructor() { }

  ngOnInit(): void {
  }

}
