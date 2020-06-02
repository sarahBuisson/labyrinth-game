import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-grid-case',
  templateUrl: './grid-case.component.html',
  styleUrls: ['./grid-case.component.css']
})
export class GridCaseComponent implements OnInit {
  writableValue: String = " "
  @Input()
  solution: String
  @Input()
  possibilites: Array<String> = ['1', '2', '3']

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelectPossi(possi): void {
    this.writableValue = possi;
  }
}
