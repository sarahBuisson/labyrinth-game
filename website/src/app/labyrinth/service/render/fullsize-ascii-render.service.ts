import {Injectable} from '@angular/core';
import {AsciiGeneratorService} from "../../../utils/ascii/ascii-generator.service";
import {AsciiRenderService} from "./ascii-render.service";
import {GenerateLabService} from "../generate-lab.service";
import {CharacterRenderService, CharacterRenderData} from "../../../characterEditor/character-render.service";
import {exitTemplate, startTemplate} from "./resources/view";

@Injectable({
  providedIn: 'root'
})
export class FullsizeAsciiRenderService extends AsciiRenderService {


  constructor(protected asciiGeneratorService: AsciiGeneratorService, private serviceLabService: GenerateLabService, private characterRenderService: CharacterRenderService) {
    super(asciiGeneratorService);
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
  topDoorTemplate = "-------------------\n" +
    "\n" +
    "    \\¨¨¨¨¨¨¨¨¨/\n" +
    "     \\   ${name}   /\n" +
    "______\\${closedTop}/______"

  bottomDoorTemplate = "¨¨¨¨¨¨/${closedBottom}\\¨¨¨¨¨¨\n" +
    "     /   ${name}   \\\n" +
    "    /_________\\\n" +
    "\n" +
    "-------------------"
  leftDoorTemplate = " |   |\n" +
    " ||\\ |\n" +
    " || \\|\n" +
    " ||  \\\n" +
    " || ${name}${closedLeft}\n" +
    " ||  ${closedLeft}\n" +
    " |'---\n" +
    " |   |"
  rightDoorTemplate;
  leftWallTemplate = " |   |\n" +
    " |   |\n" +
    " |   |\n" +
    " |   |\n" +
    " |   |\n" +
    " |   |\n" +
    " |   |\n" +
    " |   |";
  rightWallTemplate;

  topWallTemplate = "-------------------\n" +
    " \n" +
    " \n" +
    " \n" +
    "___________________"

  bottomWallTemplate = "¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨\n" +
    "\n" +
    "\n" +
    "\n" +
    "-------------------"

  leftBottomCornerTemplate = " |   /\n" +
    " |  / \n" +
    " | /  \n" +
    " |/   \n" +
    " '----";
  rightBottomCornerTemplate = this.asciiGeneratorService.reverseTemplate(this.leftBottomCornerTemplate, this.partsKeys)


  leftTopCornerTemplate = " +----\n" +
    " |\\   \n" +
    " | \\  \n" +
    " |  \\ \n" +
    " |   \\"
  rightTopCornerTemplate = this.asciiGeneratorService.reverseTemplate(this.leftTopCornerTemplate, this.partsKeys)


  renderPlayer(characterData) {
    return this.characterRenderService.render(characterData)
  }

  renderCenter(zone, party): String {
    return "\n\n" + zone.contentArray.filter(it => it.className !== "DoorObjectZone").map((it) => "[" + it.name + "]");
  }


  renderObj(obj: any, characterRenderData: CharacterRenderData | undefined) {

    if (obj.name === 'exit')
      return exitTemplate
    if (obj.name === 'start')
      return startTemplate
    if (obj.name === 'player')
      return this.renderPlayer(characterRenderData)
    if (obj.type === "key")
      return `(${obj.name})--±`
    if (obj.name === "boussole")
      return `(;)`
    if (obj.name === "radar")
      return `(®)`
    if (obj.name === "map")
      return `/#/`
    if (obj.name === "compas")
      return `%/`
    return `[${obj.name}]`
  }
}
