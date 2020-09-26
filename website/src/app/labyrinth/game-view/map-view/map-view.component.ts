import {Component, Input, OnInit} from '@angular/core';
import {GameplayLabService} from "../../service/gameplay-lab.service";
import {paperDataGridTemplate, mapGridTemplate} from "../../service/render/resources/border";


let mapBorderData = paperDataGridTemplate;

@Component({
  selector: 'map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {


  @Input()
  currentPartieProxy: any

  @Input()
  renderService: any


  @Input()
  rangeArroundPlayer: number = -1;

  borderData = mapBorderData
  showMap:any;

  constructor(public gameplayLabService: GameplayLabService) {
  }

  ngOnInit(): void {
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
    if (this.rangeArroundPlayer < 0)
      return true
    let location = this.currentPartieProxy.player.location;
    return (Math.abs(location.x - levelCase.x) <= this.rangeArroundPlayer
      && Math.abs(location.y - levelCase.y) <= this.rangeArroundPlayer);
  }

  borderRendered(levelCase) {
    let borderRendered = {...mapGridTemplate}
    let directions: Array<String> = ['left', 'right', 'top', 'bottom'];
    directions.forEach((direction: String) => {
      let door = this.gameplayLabService.doorAt(levelCase, direction.toUpperCase())
      borderRendered[direction + "Class"] = "decor-ui"
      if (door) {
        if (door.key) {
          borderRendered[direction + "Template"] = door.name
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
      let nbrOfConnections = levelCaseInput.connectedArray.length;
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
}
