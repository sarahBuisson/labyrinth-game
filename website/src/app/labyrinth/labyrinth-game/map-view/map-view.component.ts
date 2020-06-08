import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  @Input()
  currentPartieProxy: any

  @Input()
  renderService:any
  constructor() { }

  @Input()
  rangeArroundPlayer:number=-1;

  ngOnInit(): void {
  }

  isStart(levelCase){
    let start = this.currentPartieProxy.level.start;
    return start.x===levelCase.x && start.y===levelCase.y
  }

  isExit(levelCase){
    let exit = this.currentPartieProxy.level.exit;
    return exit.x === levelCase.x && exit.y === levelCase.y
  }

  hasPlayer(levelCase) {
    let location = this.currentPartieProxy.player.location;
    return location.x === levelCase.x && location.y === levelCase.y
  }

  isCaseShowable(levelCase) {
    if(this.rangeArroundPlayer < 0 )
      return true
    let location = this.currentPartieProxy.player.location;
    return (Math.abs(location.x - levelCase.x) <= this.rangeArroundPlayer
      && Math.abs(location.y - levelCase.y) <= this.rangeArroundPlayer);
  }
}
