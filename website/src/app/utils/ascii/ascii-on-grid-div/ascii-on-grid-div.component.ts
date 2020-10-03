import {
  Component, ElementRef, HostBinding, Input,
  OnInit, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-ascii-on-grid-div',
  template: '<ng-content></ng-content>',
  styleUrls: ['./ascii-on-grid-div.component.css']
})
export class AsciiOnGridDivComponent implements OnInit {
  @HostBinding('style.grid-column')
  public gridColumn: string;

  @HostBinding('style.grid-row')
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
