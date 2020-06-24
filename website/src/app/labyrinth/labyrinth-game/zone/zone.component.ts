import {Component, Input, OnInit} from '@angular/core';
import {AsciiGeneratorService} from "../../../utils/ascii/ascii-generator.service";
import {AsciiRenderService} from "../decor/ascii-render.service";
import {GenerateLabService} from "../../service/generate-lab.service";
import {GameplayLabService} from "../../service/gameplay-lab.service";

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css'],
})
export class ZoneComponent implements OnInit {

  @Input()
  label: string
  @Input()
  renderService: AsciiRenderService

  @Input()
  hasPlayer: boolean;

  private _levelCase: any


  get levelCase(): any {
    return this._levelCase;
  }

  @Input()
  set levelCase(val) {
    this._levelCase = val;
    this.leftDoor = this.gameplayLabService.doorAt(this._levelCase,"LEFT")
    this.rightDoor = this.gameplayLabService.doorAt(this._levelCase,"RIGHT")
    this.topDoor = this.gameplayLabService.doorAt(this._levelCase,"TOP")
    this.bottomDoor = this.gameplayLabService.doorAt(this._levelCase,"BOTTOM")
  }

  leftDoor: any
  rightDoor: any
  topDoor: any
  bottomDoor: any

  constructor(private serviceLabService: GenerateLabService, public gameplayLabService: GameplayLabService) {
  }

  ngOnInit(): void {


  }

  manageClick: any = (direction) => {
    this.gameplayLabService.move(direction)
  }
  takeObj: any = (obj) => {
    this.gameplayLabService.take(obj)
  }
  clickOnZone: any = (e) => {
console.log("CCCCC")
    if(this.gameplayLabService.moveAtCase(this.levelCase)){
      e.preventDefault();
    }
  };


  renderSide(direction: string) {
    let door = this.gameplayLabService.doorAt(this._levelCase, direction);
    return this.renderService.renderSide(direction, door)
  }

  renderCorner(dir1: string, dir2: string) {
    return this.renderService.renderCorner(dir1, dir2)
  }
}
