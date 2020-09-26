import {Component, Input, OnInit} from '@angular/core';
import {
  viewCloseDoorGridTemplate,
  viewOpenDoorGridTemplate,
  viewWallGridTemplate
} from "../../../service/render/resources/border";
import {GameplayLabService} from "../../../service/gameplay-lab.service";
import {FullsizeAsciiRenderService} from "../../../service/render/fullsize-ascii-render.service";

@Component({
  selector: 'app-zone-view',
  templateUrl: './zone-view.component.html',
  styleUrls: ['./zone-view.component.css']
})
export class ZoneViewComponent implements OnInit {

  @Input()
  zone: any;

 @Input()
 characterRenderData: any; //TODO : not to like this

  constructor(public gameplayLabService: GameplayLabService, public renderService:FullsizeAsciiRenderService) {
  }

  ngOnInit(): void {
  }





  borderRendered() {
    let borderRendered = {...viewWallGridTemplate}
    let directions: Array<String> = ['left', "right", 'top', 'bottom'];
    directions.forEach((key: String) => {
      let door = this.gameplayLabService.doorAt(this.zone, key.toUpperCase())
      borderRendered[key + "BorderClass"] = 'decor-ui'

      if (door) {
        borderRendered[key + "BorderClass"] = 'interact-ui'
        if (door.key) {
          borderRendered[key + "Template"] = viewCloseDoorGridTemplate[key + "Template"].replace("1", door.name)//TODO : use template instead of replace
        } else {
          borderRendered[key + "Template"] = viewOpenDoorGridTemplate[key + "Template"]

        }
      }
    })

    return borderRendered;
  }


  manageClick: any = () => {
    if (this.gameplayLabService.hasPlayer(this.zone)) {
      return (direction) => {
        this.gameplayLabService.move(direction)
      }
    } else {
      return () => {
      }
    }
  }

  takeObj: any = (obj) => {
    this.gameplayLabService.take(obj)
  }

  clickOnZone: any = (e) => {
    if (this.gameplayLabService.moveAtCase(this.zone)) {
      e.preventDefault();
    }
  };

  renderObj(obj: any) {
    return this.renderService.renderObj(obj, this.characterRenderData)
  }

  computeTooltip(obj: any) {
    if(obj.name=='start')
      return 'start flag'
    if (obj.name == 'exit')
      return 'the exit'
    if (obj.key)
      return 'closed door ' + obj.name
    if (obj.destination)
      return 'door'
    return 'key ' + obj.name

  }
}
