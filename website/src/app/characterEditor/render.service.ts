import {Injectable} from '@angular/core';


export class CharacterData {
  eye: String
  hair: String
  torso: String
  hat: String
  leg: String
}

export class TemplateAnimation {}



@Injectable({
  providedIn: 'root'
})
export class RenderService {

  constructor() {
    this.bodyParts = Object.keys(this.defaultData)
    console.log("bodyParts")
    console.log(this.bodyParts)
    for (let key in {...this.reverseChar}) {
      console.log(key)
      this.reverseChar[this.reverseChar[key]] = key;
    }
    console.log(this.reverseChar)
    this.templateRight=this.reverseTemplate(this.templateLeft)
    console.log(this.templateRight)
  }

defaultData:CharacterData=Object.assign(new CharacterData(), {
  eye: "'",
  hair: "(",
  torso: "M",
  hat: "_--_",
  leg: "d"
})
  reverseChar: Object = {
    'd': 'b',
    '/': '\\',
    'q': 'p',
    '(': ')'

  }


  public bodyParts: Array<String>

  templateLeft: String =
    "${hat}\n" +
    "${hair}${eye}${eye} ${hairReversed}${hairReversed}\n" +
    "/${torso}\\\n" +
    " ${leg}${leg} \n";
  templateRight: String
  private reverseString(str) {

    return this.reverseChar[str] ? this.reverseChar[str] : str;
  }
  private reverseTemplate(template) {
    return template.split("\n")
      .map(row=>{
        console.log("=>"+row);
        console.log(row.split(/\$\{(\w+)\}/g).filter(s=>s!=""));
        let reversedRow = row.split(/\$\{(\w+)\}/g)
          .filter(s=>s!="")
          .map((word) => {


            if (!this.bodyParts.includes(word) && !this.bodyParts.includes(word.replace("Reversed", ""))) {
              console.log("standardWord" + word)
              console.log(word.split("").map(e => {
                return this.reverseChar[e] ? this.reverseChar[e] : e
              }))
              return word.split("").map(e => {return this.reverseChar[e]?this.reverseChar[e]:e})
                .reverse().join("");
            } else if (word.endsWith("Reversed")) {
              return `$\{${word.replace("Reversed", "")}}`;
            } else {
              console.log("w"+word+" "+this.bodyParts.includes(word))
              return `$\{${word}Reversed}`;
            }
          }).reverse().join("");
        console.log("->"+reversedRow)
        return reversedRow})
      .join("\n")

  }

  private reverseData(data:CharacterData) {
    let ret = {}
    for (let key in data) {

      ret[key + "Reversed"] = this.reverseString(data[key])

    }
    return ret;
  }

  private templateString(template:String, data:CharacterData) {




    return template.replace(/\$\{(\w+)\}/g, (_, name) => data[name] || "?");
  }

  render(data: CharacterData) {
    return this.templateString(this.templateRight, {...data, ...this.reverseData(data)})

  }
}
