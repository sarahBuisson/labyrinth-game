import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {GameplayLabService} from "../../service/gameplay-lab.service";
import {paperGridTemplate, mapGridTemplate} from "../../service/render/resources/border";
import {CHARACTER_SPACING, LINE_HEIGHT} from "../../../utils/ascii/AsciiConst";
import {parseKotlinPathToJsView, parseKotlinToJsView} from "../../../utils/kotlinUtils";


let mapBorderData = paperGridTemplate;

@Component({
  selector: 'map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
  styles: [`
    .title {
      display: inline-flex;
      flex-direction: column;
      width: ${CHARACTER_SPACING * 3}px;
      padding:${LINE_HEIGHT * 1}px ${CHARACTER_SPACING * 1}px;
    }

    .legend {
        min-width: ${CHARACTER_SPACING * 10}px;
    }`]
})
export class MapViewComponent implements OnInit, OnChanges {


  @Input()
  currentParty: any

  @Input()
  renderService: any


  @Input()
  rangeArroundPlayer: number = -1;

  borderData = mapBorderData
  showMap: any;

  constructor(public gameplayLabService: GameplayLabService) {
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.updateFieldOfView();
  }


  ngOnInit(): void {
    this.updateFieldOfView();
  }

  updateFieldOfView(): void {
  }

  isStart(levelCase) {
    let start = this.currentParty.level.start;
    return start.x === levelCase.x && start.y === levelCase.y
  }

  isExit(levelCase) {
    let exit = this.currentParty.level.exit;
    return exit.x === levelCase.x && exit.y === levelCase.y
  }

  hasPlayer(levelCase) {
    let location = this.currentParty.player.location;
    return location.x === levelCase.x && location.y === levelCase.y
  }

  isCaseShowable(levelCase) {
    if (this.rangeArroundPlayer < 0)
      return true
    let location = this.currentParty.player.location;
    return (Math.abs(location.x - levelCase.x) <= this.rangeArroundPlayer
      && Math.abs(location.y - levelCase.y) <= this.rangeArroundPlayer);
  }

  borderRendered(levelCase) {
    let borderRendered = {...mapGridTemplate}
    let directions: Array<String> = ['left', 'right', 'top', 'bottom'];

    directions.forEach((direction: string) => {
      let door = this.gameplayLabService.doorAt(levelCase, direction.toUpperCase())
      borderRendered[direction + "Class"] = "decor-ui"
      if (!!door) {
        if (door.key) {
          borderRendered[direction+ "Template"] = door.name
          borderRendered[direction + "Class"] = "interact-ui"
        } else {

        }

      } else {
        borderRendered[direction + "Template"] = ' '
      }
    })
    return borderRendered;
  }


  contentRendered(levelCaseInput: any) {
    let content = this.gameplayLabService.levelContent(levelCaseInput);
    if (content[0]) {

      return this.renderService.renderObj(content[0])
    } else {
      let nbrOfConnections = levelCaseInput.connected.length;
      if (nbrOfConnections == 1) {
        return " ";
      }
      if (nbrOfConnections == 2) {
        return "."
      } else {
        return "+"
      }
    }
  }

  computeClass(levelCaseInput: any) {
    let content = this.gameplayLabService.levelContent(levelCaseInput)
    if (content[0]) {
      if (content[0].name === "player" || content[0].name === "exit") {
        return "important-ui"
      }
    }
    return "ihm-ui"
  }
}
