import {Component, Input, OnInit} from '@angular/core';
import {asciiStringToGridObject} from "../../../utils/ascii/ascii-hard-div/ascii-hard-div.component";
import {GameplayLabService} from "../../service/gameplay-lab.service";
import {paperDataGridTemplate, mapGridTemplate} from "../decor/resources/data";


let mapBorderData = paperDataGridTemplate;

@Component({
  selector: 'app-map-view',
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
    directions.forEach((key: String) => {
      let door = this.gameplayLabService.doorAt(levelCase, key.toUpperCase())
      if (door) {
        if (door.key) {
          borderRendered[key + "Template"] = door.name
        } else {

        }

      } else {
        borderRendered[key + "Template"] = ' '
      }
    })
    return borderRendered;
  }

  contentRendered(levelCaseInput: any) {
    let content = this.gameplayLabService.levelContent(levelCaseInput);
    if (content[0]) {
      if (content[0].classname === "KeyObjectZone") {
        return content[0].name;
      } else if (content[0].name === "player") {
        return "@"
      } else if (content[0].name === "exit") {
        return "€"
      } else if (content[0].name === "start") {
        return "$"
      }else if (content[0].name === "compass") {
        return "%"
      }else if (content[0].name === "boussole") {
        return "@"
      }
      else if (content[0].name === "map") {
        return "#"
      }else {return  content[0].name;}}

     else {
      return " "
    }

  }
}
