import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {
  viewEmptyZones
} from "../../service/render/resources/border";
import {GameplayLabService} from "../../service/gameplay-lab.service";
import {FullsizeAsciiRenderService} from "../../service/render/fullsize-ascii-render.service";
import {CHARACTER_SPACING, LINE_HEIGHT} from "../../../utils/ascii/AsciiConst";
import {parseKotlinToJsView} from "../../../utils/kotlinUtils";

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
  currentParty: any

  constructor(public gameplayLabService: GameplayLabService,
              public renderService: FullsizeAsciiRenderService) {

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
      this.fieldOfView = this.currentParty.level.content;
    } else {
      this.fieldOfView = new Array();
      let location = this.currentParty.player.location;
      for (let dy = -this.rangeArroundPlayer; dy <= this.rangeArroundPlayer; dy++) {
        this.fieldOfView[this.rangeArroundPlayer + dy] = new Array();
        for (let dx = -this.rangeArroundPlayer; dx <= this.rangeArroundPlayer; dx++) {

          let x: number = 0 + location.x + dx;
          let y: number = 0 + location.y + dy;
          let ix = 0 + this.rangeArroundPlayer + dx;
          let iy = 0 + this.rangeArroundPlayer + dy;

          if (x >= 0 && y >= 0)
            if(this.currentParty.level.content[y])
            this.fieldOfView[iy][ix] = this.currentParty.level.content[y][x]
        }
      }
    }
  }


  emptyRendered(x, y) {

    let dx = x + this.currentParty.player.location.x
    let dy = y + this.currentParty.player.location.y

    let index = (dx + dy) % viewEmptyZones.length;
    let borderTemplate = viewEmptyZones[index];
    return borderTemplate;
  }
}
