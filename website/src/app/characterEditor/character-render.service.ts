import {Injectable} from '@angular/core';
import {AsciiGeneratorService} from "../utils/ascii/ascii-generator.service";


export class CharacterRenderData {
  eye: String="'";
  hair: String="(";
  torso: String= "M";
  hat: String= "_--_";
  leg: String= "d";
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
  templateRight: String
  defaultData: CharacterRenderData = Object.assign(new CharacterRenderData(), {
    eye: "'",
    hair: "(",
    torso: "M",
    hat: "_--_",
    leg: "d"
  })


  render(data: CharacterRenderData) {
    return this.asciiGeneratorService.templateString(this.templateRight, {...data, ...this.asciiGeneratorService.reverseData(data)})

  }
}
