import {Component, Input, OnInit} from '@angular/core';
import {bagGridTemplate} from "../../service/render/resources/view";
import {FullsizeAsciiRenderService} from "../../service/render/fullsize-ascii-render.service";

@Component({
  selector: 'inventory-view',
  templateUrl: './inventory-view.component.html',
  styleUrls: ['./inventory-view.component.css']
})
export class InventoryViewComponent implements OnInit {
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
