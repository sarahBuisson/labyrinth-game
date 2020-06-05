import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsciiGeneratorService {

  constructor() {
    for (let key in {...this.reverseChar}) {
      console.log(key)
      this.reverseChar[this.reverseChar[key]] = key;
    }
    console.log(this.reverseChar)
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
        console.log("=>"+row);
        console.log(row.split(/\$\{(\w+)\}/g).filter(s=>s!=""));
        let reversedRow = row.split(/\$\{(\w+)\}/g)
          .filter(s=>s!="")
          .map((word) => {


            if (!partsKey.includes(word) && !partsKey.includes(word.replace("Reversed", ""))) {
              console.log("standardWord" + word)
              console.log(word.split("").map(e => {
                return this.reverseChar[e] ? this.reverseChar[e] : e
              }))
              return word.split("").map(e => {return this.reverseChar[e]?this.reverseChar[e]:e})
                .reverse().join("");
            } else if (word.endsWith("Reversed")) {
              return `$\{${word.replace("Reversed", "")}}`;
            } else {
              return `$\{${word}Reversed}`;
            }
          }).reverse().join("");
        console.log("->"+reversedRow)
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
    return template.replace(/\$\{(\w+)\}/g, (_, name) => data[name] || "?");
  }

}
