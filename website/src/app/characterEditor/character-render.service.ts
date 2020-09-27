import {Injectable} from '@angular/core';
import {AsciiGeneratorService} from "../utils/ascii/ascii-generator.service";


export class CharacterRenderData {
  eye: String = "'";
  hair: String = "(";
  torso: String = "M";
  hat: String = "_--_";
  leg: String = "d";
}

export class TemplateAnimation {
}


@Injectable({
  providedIn: 'root'
})
export class CharacterRenderService {

  constructor(private asciiGeneratorService: AsciiGeneratorService) {
    this.bodyPartsKey = Object.keys(this.defaultData)
    this.templateRight = this.asciiGeneratorService.reverseTemplate(this.templateLeft, this.bodyPartsKey)
  }

  public bodyPartsKey: Array<String>

  templateLeft: String =
    "${hat}\n" +
    "${hair}${eye}${eye} ${hairReversed}${hairReversed}\n" +
    "/${torso} \\\n" +
    " ${leg}${leg} \n";

  templateFront: String =
    "${hat}\n" +
    "${hair} ${eye}${eye} ${hairReversed}\n" +
    "/ ${torso} \\\n" +
    " ${leg}${legReversed} \n";

  templateBack: String =
    "${hat}\n" +
    "${hair}${hair}${hair}${hairReversed}${hairReversed}${hairReversed}\n" +
    "/   \\\n" +
    " ${leg}${legReversed} \n";
  templateRight: String
  defaultData: CharacterRenderData = Object.assign(new CharacterRenderData(), {
    eye: "'",
    hair: "(",
    torso: "M",
    hat: " _--_ ",
    leg: "d"
  })


  render(data: CharacterRenderData, direction = 'LEFT') {

    let template;
    switch (direction) {
      case 'LEFT':
        template = this.templateLeft;
        break;
      case 'RIGHT':
        template = this.templateRight;
        break;
      case 'TOP':
        template = this.templateBack;
        break;
      case 'BOTTOM':
        template = this.templateFront;
        break;
      default:
        template = this.templateLeft;
        break;
    }
    return this.asciiGeneratorService.templateString(template, {...data, ...this.asciiGeneratorService.reverseData(data)})

  }
}
