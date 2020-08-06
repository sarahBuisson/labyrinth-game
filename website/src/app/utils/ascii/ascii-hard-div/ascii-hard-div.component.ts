import {AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {defaultGridTemplate} from "../../../labyrinth/service/render/resources/view";

@Component({
  selector: 'ascii-hard-div',
  templateUrl: './ascii-hard-div.component.html',
  styleUrls: ['./ascii-hard-div.component.css']
})
export class AsciiHardDivComponent implements OnInit {
  @Input()
  xRepeat: number = 1
  @Input()
  yRepeat: number = 1

  @Input()
  topTemplate = "-"
  @Input()
  bottomTemplate = this.topTemplate
  @Input()
  leftTemplate = "|"
  @Input()
  rightTemplate = this.leftTemplate
  @Input()
  topLeftTemplate = "+"
  @Input()
  topRightTemplate = this.topLeftTemplate
  @Input()
  bottomLeftTemplate = this.topLeftTemplate
  @Input()
  bottomRightTemplate = this.topLeftTemplate

  @Input()
  borderDatas: any = defaultGridTemplate;



  @Input()
  onClick: any=()=>{}


  constructor() {
  }

  ngOnInit() {
    if (this.borderDatas) {
      Object.assign(this, this.borderDatas)
    }
  }

  counter(size) {
    let array = new Array()
    for (let i = 0; i < size; i++) {
      array.push(i)
    }
    return array;
  }

}


export function asciiStringToGridObject(str, leftCornerWidth, topSideWidth,
                                        leftCornerHeight, leftSideHeight) {
  let templates = {
    topTemplate: "",
    bottomTemplate: "",
    leftTemplate: "",
    rightTemplate: "",
    topLeftTemplate: "",
    topRightTemplate: "",
    bottomLeftTemplate: "",
    bottomRightTemplate: ""
  }

  let strR = str.split("\n")

  for (let y = 0; y < leftCornerHeight; y++) {
    for (let x = 0; x < leftCornerWidth; x++) {
      templates.topLeftTemplate += strR[y][x]
    }
    templates.topLeftTemplate += "\n"
    for (let x = leftCornerWidth; x < leftCornerWidth + topSideWidth; x++) {
      templates.topTemplate += strR[y][x]
    }
    templates.topTemplate += "\n"
    for (let x = leftCornerWidth + topSideWidth; x < strR[y].length; x++) {
      templates.topRightTemplate += strR[y][x]
    }
    templates.topRightTemplate += "\n"
  }

  for (let y = leftCornerHeight; y < leftCornerHeight + leftSideHeight; y++) {
    for (let x = 0; x < leftCornerWidth; x++) {
      templates.leftTemplate += strR[y][x]
    }
    templates.leftTemplate += "\n"
    for (let x = leftCornerWidth + topSideWidth; x < strR[y].length; x++) {
      templates.rightTemplate += strR[y][x]
    }
    templates.rightTemplate += "\n"
  }

  for (let y = leftCornerHeight + leftSideHeight; y < strR.length; y++) {
    for (let x = 0; x < leftCornerWidth; x++) {
      templates.bottomLeftTemplate += strR[y][x]
    }
    templates.bottomLeftTemplate += "\n"
    for (let x = leftCornerWidth; x < leftCornerWidth + topSideWidth; x++) {
      templates.bottomTemplate += strR[y][x]
    }

    templates.bottomTemplate += "\n"
    for (let x = leftCornerWidth + topSideWidth; x < strR[y].length; x++) {
      templates.bottomRightTemplate += strR[y][x]
    }
    templates.bottomRightTemplate += "\n"
  }
  Object.keys(templates).forEach((k) =>
    templates[k] = templates[k].slice(0, -1))
  return templates;
}
