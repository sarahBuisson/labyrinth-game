import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ascii-modal',
  templateUrl: './ascii-modal.component.html',
  styleUrls: ['./ascii-modal.component.css']
})
export class AsciiModalComponent implements OnInit {

  @Input()
  _show = false

  constructor() {
  }

  ngOnInit(): void {
  }

  show() {
    this._show = true
  }

  hide() {

    this._show = false
  }

}
