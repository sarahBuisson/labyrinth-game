import {Component, Input, OnInit} from '@angular/core';
import {CharacterRenderData} from "../../../characterEditor/character-render.service";

@Component({
  selector: 'app-level-view',
  templateUrl: './level-view.component.html',
  styleUrls: ['./level-view.component.css']
})
export class LevelViewComponent implements OnInit {

  @Input()
  currentPartieProxy: any

  @Input()
  renderService: any

  constructor() {
  }

  @Input()
  rangeArroundPlayer: number = -1;

  @Input()
  characterRenderData: CharacterRenderData;

  ngOnInit(): void {
  }

  isStart(levelCase) {
    let start = this.currentPartieProxy.level.start;
    return start.x === levelCase.x && start.y === levelCase.y
  }

  isExit(levelCase) {
    let exit = this.currentPartieProxy.level.exit;
    return exit.x === levelCase.x && exit.y === levelCase.y
  }

  hasPlayer(levelCase) {
    let location = this.currentPartieProxy.player.location;
    return location.x === levelCase.x && location.y === levelCase.y
  }

  isCaseShowable(levelCase) {
    if (this.rangeArroundPlayer < 0)
      return true
    let location = this.currentPartieProxy.player.location;
    return (Math.abs(location.x - levelCase.x) <= this.rangeArroundPlayer
      && Math.abs(location.y - levelCase.y) <= this.rangeArroundPlayer);
  }
}
