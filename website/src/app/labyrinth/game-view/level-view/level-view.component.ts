import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {
  viewEmptyZones
} from "../../service/render/resources/border";
import {GameplayLabService} from "../../service/gameplay-lab.service";
import {FullsizeAsciiRenderService} from "../../service/render/fullsize-ascii-render.service";
import {CHARACTER_SPACING, LINE_HEIGHT} from "../../../utils/ascii/AsciiConst";

@Component({
  selector: 'level-view',
  templateUrl: './level-view.component.html',
  styles: [`
    .levelRowRender {
    display: grid;
    grid-template-columns: repeat(auto-fit, ${CHARACTER_SPACING * 30}px);
    grid-template-rows: repeat(auto-fit, ${LINE_HEIGHT * 15}px);
  }
  `]
})
export class LevelViewComponent implements OnInit, OnChanges {

  @Input()
  currentPartie: any

  constructor(public gameplayLabService: GameplayLabService, public renderService: FullsizeAsciiRenderService) {

  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.updateFieldOfView();
  }

  @Input()
  rangeArroundPlayer: number = -1;
  fieldOfView: Array<Array<any>>;

  ngOnInit(): void {
    this.updateFieldOfView();
  }

  public updateFieldOfView() {
    if (this.rangeArroundPlayer === -1) {
      this.fieldOfView = this.currentPartie.level.content;
    } else {
      this.fieldOfView = new Array();
      let location = this.currentPartie.player.location;

      for (let dy = -this.rangeArroundPlayer; dy <= this.rangeArroundPlayer; dy++) {
        this.fieldOfView[this.rangeArroundPlayer + dy] = new Array();
        for (let dx = -this.rangeArroundPlayer; dx <= this.rangeArroundPlayer; dx++) {

          let x: number = 0 + location.x + dx;
          let y: number = 0 + location.y + dy;
          let ix = 0 + this.rangeArroundPlayer + dx;
          let iy = 0 + this.rangeArroundPlayer + dy;

          let zone = this.currentPartie.level.getXY(x, y)
          if (zone) {
            this.fieldOfView[iy][ix] = {
              content: zone.content.toArray(),
              connections: zone.connections
            }
          } else {
            this.fieldOfView[iy][ix] = {
              content: [],
              connections: {}
            }
          }
        }
      }
    }
  }


  emptyRendered(x, y) {

    let dx = x + this.currentPartie.player.location.x
    let dy = y + this.currentPartie.player.location.y

    let index = (dx + dy) % viewEmptyZones.length;
    let borderTemplate = viewEmptyZones[index];
    return borderTemplate;
  }
}
