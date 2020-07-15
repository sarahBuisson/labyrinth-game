import {Injectable} from '@angular/core';
import {AsciiRenderService} from "./ascii-render.service";
import {AsciiGeneratorService} from "../../../utils/ascii/ascii-generator.service";
import {CharacterRenderData} from "../../../characterEditor/character-render.service";

@Injectable({
  providedIn: 'root'
})
export class MapAsciiRenderService extends AsciiRenderService {

  constructor(asciiGeneratorService: AsciiGeneratorService) {

    let directions = ["top", "bottom", "left", "right"]
    super(asciiGeneratorService);
    directions.forEach((dir) => {

      this[dir + "DoorTemplate"] = "${name}";
      this[dir + "WallTemplate"] = " ";

    })
    this.leftBottomCornerTemplate = " ";
    this.rightBottomCornerTemplate = " ";
    this.leftTopCornerTemplate = " ";
    this.rightTopCornerTemplate = " ";
  }

  renderPlayer(characterData: CharacterRenderData) {
    return "@"
  }

  renderCenter(zone, party): String {
    let content = zone.contentArray.filter(it => !it.destination)
    if (party.player.location.x === zone.x && party.player.location.y === zone.y)
      return "@";
    else if (zone.x===party.level.exit.x &&zone.y===party.level.exit.y ) {
      return "€"
    }
    else if (content.length > 0) {
      if (content.filter(it => it.name === "start").length > 0)
        return "$"

      else
        return content[0].name
    } else return "+"
  }

  renderSide(direction: string, door: any) {
    let templateName = direction.toLowerCase() + (door ? "Door" : "Wall") + "Template";

    let doorName;
    if (!door)
      doorName = " "
    else if (door.name != "door") {
      doorName = door.name;
    } else {
      if (direction == 'TOP' || direction == "BOTTOM")
        doorName = "|"
      else
        doorName = "-"
    }

    let data: any = {...this.defaultData, name: doorName};
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

  renderObj(obj: any, characterRenderData: CharacterRenderData) {

    if (obj.classname === "KeyObjectZone") {
      return obj.name;
    } else if (obj.name === "player") {
      return "×"
    } else if (obj.name === "exit") {
      return "€"
    } else if (obj.name === "start") {
      return "$"
    }else if (obj.name === "compass") {
      return "%"
    }else if (obj.name === "boussole") {
      return "¤"
    }
    else if (obj.name === "radar") {
      return "®"
    }
    else if (obj.name === "map") {
      return "#"
    } else {
      return obj.name;
    }
  }


}
