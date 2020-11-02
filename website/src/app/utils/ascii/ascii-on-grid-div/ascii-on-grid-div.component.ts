import {
  Component, ElementRef, HostBinding, Input,
  OnInit, ViewChild
} from '@angular/core';
import {CHARACTER_HEIGHT, CHARACTER_SPACING, LINE_HEIGHT} from "../AsciiConst";

@Component({
  selector: '[app-ascii-on-grid-div]',
  template: `
    <div class="grid-content"
         [ngStyle]="{gridTemplateRows: gridRow, gridTemplateColumns: gridColumn}">
      <ng-content></ng-content>
    </div>`,
  styles: [
    ` .grid-content {
         display: inline-grid;
         grid-auto-flow: row dense;
         grid-template-rows: repeat(auto-fill, ${LINE_HEIGHT}px);
         grid-template-columns: repeat(15, ${CHARACTER_SPACING}px);
    }`
  ]
})
export class AsciiOnGridDivComponent implements OnInit {

  public gridColumn: string;


  public gridRow: string;
  @Input()
  public width: string = 'auto-fit';

  @Input()
  public height: string | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.gridColumn = 'repeat(' + this.width + ', ' + CHARACTER_SPACING + ')';
    if (this.height)
      this.gridRow = 'repeat(' + this.width + ', ' + CHARACTER_HEIGHT + ')';
  }

}
