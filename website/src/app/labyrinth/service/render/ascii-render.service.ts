import {Injectable} from '@angular/core';

import {AsciiGeneratorService} from "../../../utils/ascii/ascii-generator.service";
import {CharacterRenderData} from "./character-render.service";

@Injectable({
  providedIn: 'root'
})
export abstract  class AsciiRenderService {

  constructor(protected asciiGeneratorService: AsciiGeneratorService) {
    this.partsKeys = Object.keys(this.defaultData)
    this.rightDoorTemplate = this.asciiGeneratorService.reverseTemplate(this.leftDoorTemplate, this.partsKeys)
    this.rightWallTemplate = this.asciiGeneratorService.reverseTemplate(this.leftWallTemplate, this.partsKeys)
  }

  defaultData = {
    name: "#",
    closedBottom: "-----",
    closedTop: "-----",
    closedLeft: "|"

  }
  partsKeys = []
  topDoorTemplate:string="TODO"

  bottomDoorTemplate:string="TODO"
  leftDoorTemplate:string="TODO";
  rightDoorTemplate:string="TODO";
  leftWallTemplate:string="TODO"
  rightWallTemplate:string="TODO";

  topWallTemplate:string="TODO";

  bottomWallTemplate:string="TODO";

  leftBottomCornerTemplate :string="TODO";
  rightBottomCornerTemplate:string="TODO";

  leftTopCornerTemplate:string="TODO";
  rightTopCornerTemplate:string="TODO";

  renderSide(direction: string, door: any) {
    let templateName = direction.toLowerCase() + (door ? "Door" : "Wall") + "Template";

    let data: any = {...this.defaultData, name: door && door.name != "door" ? door.name : " "};
    data.nameReversed = data.name
    data.closedLeftReversed = data.closedLeft;
    if (door && door.name == "door") {
      data.closedTop = data.closedTop.replace(/./g, " ")
      data.closedBottom = data.closedBottom.replace(/./g, " ")
      data.closedLeft = data.closedLeft.replace(/./g, " ")
      data.closedLeftReversed = data.closedLeft;
    }
    return this.asciiGeneratorService.templateString(this[templateName], data)
  }

  renderCorner(dir1: string, dir2: string) {
    let templateName = dir2.toLowerCase() + this.capitalize(dir1.toLowerCase()) + "CornerTemplate";
    let data = this.defaultData
    return this.asciiGeneratorService.templateString(this[templateName], data)

  }

  capitalize(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  abstract renderPlayer(characterData: CharacterRenderData)

  abstract renderCenter(zone, party): String

  abstract renderObj(obj: any, characterRenderData: CharacterRenderData)
}
