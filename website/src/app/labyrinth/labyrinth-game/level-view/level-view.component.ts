import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {CharacterRenderData} from "../../../characterEditor/character-render.service";
import {
  exitTemplate, startTemplate,
  viewCloseDoorGridTemplate,
  viewOpenDoorGridTemplate,
  viewWallGridTemplate
} from "../decor/resources/data";
import {GameplayLabService} from "../../service/gameplay-lab.service";
import {AsciiRenderService} from "../decor/ascii-render.service";

@Component({
  selector: 'app-level-view',
  templateUrl: './level-view.component.html',
  styleUrls: ['./level-view.component.css']
})
export class LevelViewComponent implements OnInit, OnChanges {

  @Input()
  currentPartieProxy: any

  @Input()
  renderService: AsciiRenderService

  constructor(public gameplayLabService: GameplayLabService) {

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
      this.fieldOfView = this.currentPartieProxy.level.contentArray;
    } else {
      this.fieldOfView = new Array();
      let location = this.currentPartieProxy.player.location;

      for (let dy = -this.rangeArroundPlayer; dy <= this.rangeArroundPlayer; dy++) {
        this.fieldOfView[this.rangeArroundPlayer + dy] = new Array();
        for (let dx = -this.rangeArroundPlayer; dx <= this.rangeArroundPlayer; dx++) {

          let x: number = 0 + location.x + dx;
          let y: number = 0 + location.y + dy;
          let ix = 0 + this.rangeArroundPlayer + dx;
          let iy = 0 + this.rangeArroundPlayer + dy;
          if (this.currentPartieProxy.level.contentArray[y] && this.currentPartieProxy.level.contentArray[y][x]) {
            this.fieldOfView[this.rangeArroundPlayer + dy][this.rangeArroundPlayer + dx] = this.currentPartieProxy.level.contentArray[y][x]
          } else {
            this.fieldOfView[this.rangeArroundPlayer + dy][this.rangeArroundPlayer + dx] = {
              contentArray: [],
              connections: {}
            }
          }
        }
      }
    }
  }

  isStart(levelCase) {
    let start = this.currentPartieProxy.level.start;
    return start.x === levelCase.x && start.y === levelCase.y
  }

  isExit(levelCase) {
    let exit = this.currentPartieProxy.level.exit;
    return exit.x === levelCase.x && exit.y === levelCase.y
  }

  hasPlayer(levelCase) {
    let location = this.currentPartieProxy.player.location;
    return location.x === levelCase.x && location.y === levelCase.y
  }

  isCaseShowable(levelCase) {
    if (!levelCase)
      return false
    if (this.rangeArroundPlayer < 0)
      return true
    let location = this.currentPartieProxy.player.location;
    return (Math.abs(location.x - levelCase.x) <= this.rangeArroundPlayer
      && Math.abs(location.y - levelCase.y) <= this.rangeArroundPlayer);
  }

  borderRendered(levelCase) {
    let borderRendered = {...viewWallGridTemplate}
    let directions: Array<String> = ['left', "right", 'top', 'bottom'];
    directions.forEach((key: String) => {
      let door = this.gameplayLabService.doorAt(levelCase, key.toUpperCase())
      if (door) {
        if (door.key) {
          borderRendered[key + "Template"] = viewCloseDoorGridTemplate[key + "Template"].replace("1", door.name)//TODO : use template instead of replace
        } else {
          borderRendered[key + "Template"] = viewOpenDoorGridTemplate[key + "Template"]

        }
      }
    })

    return borderRendered;
  }


  manageClick: any = (direction) => {
    this.gameplayLabService.move(direction)
  }
  takeObj: any = (obj) => {
    this.gameplayLabService.take(obj)
  }
  clickOnZone: any = (levelCase,e) => {
    if(this.gameplayLabService.moveAtCase(levelCase)){
      e.preventDefault();
    }
  };

  renderObj(obj: any) {
    if(obj.name==='exit')
      return exitTemplate
    if(obj.name==='start')
      return startTemplate
    if(obj.name==='player')
      return this.renderService.renderPlayer(this.characterRenderData)
    return `[${obj.name}]`
  }
}
