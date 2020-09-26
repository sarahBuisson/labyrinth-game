import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {CharacterRenderData} from "../../../characterEditor/character-render.service";
import {
  viewCloseDoorGridTemplate, viewEmptyZoneGridTemplate, viewEmptyZoneGridTemplates,
  viewOpenDoorGridTemplate,
  viewWallGridTemplate
} from "../../service/render/resources/border";
import {GameplayLabService} from "../../service/gameplay-lab.service";
import {FullsizeAsciiRenderService} from "../../service/render/fullsize-ascii-render.service";

@Component({
  selector: 'level-view',
  templateUrl: './level-view.component.html',
  styleUrls: ['./level-view.component.css']
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

  @Input()
  characterRenderData: CharacterRenderData;
  fieldOfView: Array<Array<any>>;

  ngOnInit(): void {
    this.updateFieldOfView();
  }

  public updateFieldOfView() {
    if (this.rangeArroundPlayer === -1) {
      this.fieldOfView = this.currentPartie.level.contentArray;
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

          if (this.currentPartie.level.contentArray[y] && this.currentPartie.level.contentArray[y][x]) {
            this.fieldOfView[iy][ix] = this.currentPartie.level.contentArray[y][x]
          } else {
            this.fieldOfView[iy][ix] = {
              contentArray: [],
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

    let index = (dx + dy) % 5;
    return viewEmptyZoneGridTemplates[index];
  }
}
