import {Component, OnInit} from '@angular/core';
import {FullsizeAsciiRenderService} from "../service/render/fullsize-ascii-render.service";
import {CHARACTER_SPACING, LINE_HEIGHT} from "../../utils/ascii/AsciiConst";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styles: [`
    .container {
        max-width: ${CHARACTER_SPACING * 16 * 4}px;
        min-width: ${CHARACTER_SPACING * 10 * 4}px;
        min-height: ${LINE_HEIGHT * 6 * 4}px;
        text-align: center;
        padding: ${LINE_HEIGHT}px ${CHARACTER_SPACING}px;
    }

    .content {

    }
    ul {
        text-align: left;
    }

  `]
})
export class LoadingComponent implements OnInit {

  currentLoadingMessage: number = 0;
  maxNumberOfMessage: number = 6;

  constructor(public fullViewRenderService: FullsizeAsciiRenderService) {
  }

  ngOnInit(): void {
  }

  clickDuringLoading() {
    this.currentLoadingMessage = Math.floor( this.maxNumberOfMessage*Math.random())
  }

}
