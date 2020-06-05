import {Injectable} from '@angular/core';
import {AsciiGeneratorService} from "../utils/ascii/ascii-generator.service";


export class CharacterData {
  eye: String
  hair: String
  torso: String
  hat: String
  leg: String
}

export class TemplateAnimation {
}


@Injectable({
  providedIn: 'root'
})
export class RenderService {

  constructor(private asciiGeneratorService: AsciiGeneratorService) {
    this.bodyPartsKey = Object.keys(this.defaultData)
    this.templateRight = this.asciiGeneratorService.reverseTemplate(this.templateLeft, this.bodyPartsKey)
    console.log(this.templateRight)
  }

  public bodyPartsKey: Array<String>

  templateLeft: String =
    "${hat}\n" +
    "${hair}${eye}${eye} ${hairReversed}${hairReversed}\n" +
    "/${torso}\\\n" +
    " ${leg}${leg} \n";
  templateRight: String
  defaultData: CharacterData = Object.assign(new CharacterData(), {
    eye: "'",
    hair: "(",
    torso: "M",
    hat: "_--_",
    leg: "d"
  })


  render(data: CharacterData) {
    return this.asciiGeneratorService.templateString(this.templateRight, {...data, ...this.asciiGeneratorService.reverseData(data)})

  }
}
