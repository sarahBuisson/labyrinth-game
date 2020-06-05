import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ascii',
  templateUrl: './ascii.component.html',
  styleUrls: ['./ascii.component.css']
})
export class AsciiComponent implements OnInit {
  @Input()
  content: any

  constructor() {
  }

  ngOnInit(): void {
  }

}
