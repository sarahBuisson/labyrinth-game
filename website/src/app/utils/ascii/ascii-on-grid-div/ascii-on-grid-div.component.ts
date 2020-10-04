import {
  Component, ElementRef, HostBinding, Input,
  OnInit, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-ascii-on-grid-div',
  template: '<div class="grid-content" [ngStyle]="{gridRow:gridRow, gridColumn:gridColumn}"><ng-content></ng-content></div>',
  styleUrls: ['./ascii-on-grid-div.component.css']
})
export class AsciiOnGridDivComponent implements OnInit {

  public gridColumn: string;


  public gridRow: string;
  @Input()
  public width: number = 1;

  @Input()
  public height: number | undefined;

  constructor() { }

  ngOnInit(): void {
    this.gridColumn = 'span ' + this.width;

    if(this.height)
      this.gridRow = 'span ' + this.height;
  }

}
