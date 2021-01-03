import {Component, Input, OnInit} from '@angular/core';
import {
  viewCloseDoorGridTemplate,
  viewOpenDoorGridTemplate,
  viewWallGridTemplate
} from "../../../service/render/resources/border";
import {GameplayLabService} from "../../../service/gameplay-lab.service";
import {FullsizeAsciiRenderService} from "../../../service/render/fullsize-ascii-render.service";
import {utils} from "music-generator";
import {LINE_HEIGHT} from "../../../../utils/ascii/AsciiConst";

let backgroundTemplate = utils.shuffle([' ¨    \n  °',
  ' -      \n       -   \n    -',
  "",
  //'__/___/____\\_\\_\n_/_/_______\\___\n_____/____\\____\n___/____\\______\n_/_______\\___\\_\n',
  ' _/  _/____\\_\\_\n_/_/___    \\___\n_____/  __\\____\n___/____\\__    \n_/   ___\\__ \\_\n',
  //' _/___ /_ \\_\\_\n_/_/_ __  _\\___\n____ /__ _\\_ __\n_ _/_ _ \\__ ___\n_/__ __ _\\__\\__\n',
  //' _/_/__ \\__ \\_\n___/ / __\\__  \\\n __/ /__ \\_\\\\_\n_ __/  __\\_\\ \\\n/ __/_/_\\__  \\_',

  ' ,`    ,  \'  \n ,\'    \'  ,  ,,  \n       ,  \n    \'\'  , ` ,     ',
  ' .    .  \n    .   .   \n    .',
  ' .       .  \n       .    .   \n       .',
  ' °       o  \n       °    .   \n  o   °       .',
  ' ..    ..... .. \n. . .... ..... .\n.. ... ..   ....\n....     .... . \n. .      ...   .\n'

])

@Component({
  selector: 'app-zone-view',
  templateUrl: './zone-view.component.html',
  styleUrls: ['./zone-view.component.css'],
  styles: [`.zoneContent {
    position: relative;
    min-height: ${LINE_HEIGHT * 5}px;
  }`]

})
export class ZoneViewComponent implements OnInit {

  @Input()
  zone: any;

  constructor(public gameplayLabService: GameplayLabService,
              public renderService: FullsizeAsciiRenderService) {

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
        borderRendered[key + "Tooltip"] = this.computeTooltip(door)
      }
    })

    return borderRendered;
  }

  backgroundRender() {

    return backgroundTemplate[(this.zone.x + this.zone.y*3) % backgroundTemplate.length]
  }

  clickOnBorder: any = () => {
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
    return this.renderService.renderObj(obj)
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
