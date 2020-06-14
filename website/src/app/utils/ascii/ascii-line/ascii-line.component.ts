import {AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'ascii-line',
  templateUrl: './ascii-line.component.html',
  styleUrls: ['./ascii-line.component.css']
})
export class AsciiLineComponent implements OnInit {
  @Input()
  size: number = 1
  char: String = "."

  line: string;

  constructor() {
  }

  ngOnInit() {
    this.line = "";

    for (let i = 0; i < this.size; i++)
      this.line += this.char;
  }


}
