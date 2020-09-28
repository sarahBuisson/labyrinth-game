import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsciiGeneratorService {

  constructor() {
    for (let key in {...this.reverseChar}) {
      this.reverseChar[this.reverseChar[key]] = key;
    }
  }
  reverseChar: Object = {
    'd': 'b',
    '/': '\\',
    'q': 'p',
    '(': ')'

  }

  private reverseString(str) {

    return this.reverseChar[str] ? this.reverseChar[str] : str;
  }
  reverseTemplate(template, partsKey) {
    return template.split("\n")
      .map(row=>{
        let reversedRow = row.split(/\$\{(\w+)\}/g)
          .filter(s=>s!="")
          .map((word) => {


            if (!partsKey.includes(word) && !partsKey.includes(word.replace("Reversed", ""))) {
              return word.split("").map(e => {return this.reverseChar[e]?this.reverseChar[e]:e})
                .reverse().join("");
            } else if (word.endsWith("Reversed")) {
              return `$\{${word.replace("Reversed", "")}}`;
            } else {
              return `$\{${word}Reversed}`;
            }
          }).reverse().join("");
        return reversedRow})
      .join("\n")

  }

  reverseData(data:any) {
    let ret = {}
    for (let key in data) {

      ret[key + "Reversed"] = this.reverseString(data[key])

    }
    return ret;
  }

  templateString(template:String, data:any) {
    console.log(data)
    console.log(template)
    return template.replace(/\$\{(\w+)\}/g, (_, name) =>{console.log(name);return  data[name] || "?"});
  }

}
