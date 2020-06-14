import {AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'ascii-div',
  templateUrl: './ascii-div.component.html',
  styleUrls: ['./ascii-div.component.css']
})
export class AsciiDivComponent implements OnInit {
  @Input( )
  width: number = 10
  @Input()
  height: number = 1

  @Input()
  hoverClass:String;

  vertiLine: any = '!\n';
  horrizLine: any = '-';



  constructor() {
  }

  ngOnInit() {
    this.vertiLine = "";
    this.horrizLine = "";
    for (let i = 0; i < this.width; i++)
      this.horrizLine += "-"
    for (let i = 0; i < this.height; i++)
      this.vertiLine += '!\n';
  }


}
