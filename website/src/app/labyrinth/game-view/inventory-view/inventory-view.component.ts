import {Component, Input, OnInit} from '@angular/core';
import {bagGridTemplate} from "../../service/render/resources/border";
import {FullsizeAsciiRenderService} from "../../service/render/fullsize-ascii-render.service";
import {CHARACTER_SPACING} from "../../../utils/ascii/AsciiConst";

@Component({
  selector: 'inventory-view',
  templateUrl: './inventory-view.component.html',
  styles:[`:host {
    background: white;
    display: inline-block;
  }

  .title {
    width: ${CHARACTER_SPACING}px;
    margin-left: -${CHARACTER_SPACING*2}px;
    margin-right: ${CHARACTER_SPACING}px;
    display: inline-block;
  }

  .content {
    display: inline-block;
    width: ${CHARACTER_SPACING*(6*2+1)}px;
  }
  `]
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
    return this._renderService.renderObj(obj);
  }

  computeTooltip(obj: any) {
    if (obj.name == 'start')
      return 'start flag'
    if (obj.name == 'exit')
      return 'the exit'
    if (obj.key)
      return 'closed door ' + obj.name
    if (obj.destination)
      return 'door'
    if (obj.inventory)
      return 'You'
    return 'key ' + obj.name

  }

}
