import {Component, Input, OnInit} from '@angular/core';
import {bagGridTemplate} from "../decor/resources/data";
import {FullsizeAsciiRenderService} from "../decor/fullsize-ascii-render.service";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  @Input()
  player: any;
  borderDatas: any = bagGridTemplate;

  constructor(private _renderService:FullsizeAsciiRenderService) {
  }

  ngOnInit(): void {
  }

  render(obj) {
    return this._renderService.renderObj(obj, undefined);
  }

}
