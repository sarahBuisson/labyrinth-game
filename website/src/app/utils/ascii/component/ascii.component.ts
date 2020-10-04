import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '[app-ascii]',
  templateUrl: './ascii.component.html',
  styleUrls: ['./ascii.component.css']
})
export class AsciiComponent implements OnInit {
  @Input()
  public content: any
  @Input()
  public tooltip: string
  @Input()
  public asciiClass: string=''

  constructor() {
  }

  ngOnInit(): void {
  }

}
