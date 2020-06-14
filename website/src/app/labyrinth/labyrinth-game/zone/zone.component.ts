import {Component, Input, OnInit} from '@angular/core';
import {AsciiGeneratorService} from "../../../utils/ascii/ascii-generator.service";
import {AsciiRenderService} from "../decor/ascii-render.service";

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css'],
})
export class ZoneComponent implements OnInit {

  @Input()
  label: string
  @Input()
  renderService:AsciiRenderService

  @Input()
  hasPlayer: boolean;

  private _levelCase: any


  get levelCase(): any {
    return this._levelCase;
  }

  @Input()
  set levelCase(val) {
    this._levelCase = val;
    this.leftDoor = this.doorAt("LEFT")
    this.rightDoor = this.doorAt("RIGHT")
    this.topDoor = this.doorAt("TOP")
    this.bottomDoor = this.doorAt("BOTTOM")
  }

  leftDoor: any
  rightDoor: any
  topDoor: any
  bottomDoor: any
  constructor() {
  }

  ngOnInit(): void {


  }

  levelContent() {
    return (this.levelCase ? this.levelCase.contentArray : []).filter(it => !this.isDoor(it))
  }

  private isDoor(it) {
    return it.destination !== undefined
  }

  doorAt(direction: string) {
    let destination = this.levelCase.connectionsMap?this.levelCase.connectionsMap[direction]:undefined
    if (destination) {
      return this.levelCase.contentArray.filter(it => it.destination && it.destination.x === destination.x && it.destination.y === destination.y)[0]
    }
  }

  renderSide(direction: string) {
    let door = this.doorAt(direction);
    return this.renderService.renderSide(direction, door)
  }

  renderCorner(dir1: string, dir2: string) {
    return this.renderService.renderCorner(dir1, dir2)
  }
}
