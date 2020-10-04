import { Component, OnInit } from '@angular/core';
import {FullsizeAsciiRenderService} from "../service/render/fullsize-ascii-render.service";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  currentLoadingMessage: number = 1;
  constructor(private fullViewRenderService:FullsizeAsciiRenderService) { }

  ngOnInit(): void {
  }

  clickDuringLoading() {
    this.currentLoadingMessage = Math.round(Math.random() * 5.0)
  }

}
