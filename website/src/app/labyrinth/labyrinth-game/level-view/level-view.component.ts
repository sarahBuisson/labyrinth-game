import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-level-view',
  templateUrl: './level-view.component.html',
  styleUrls: ['./level-view.component.css']
})
export class LevelViewComponent implements OnInit {

  @Input()
  currentLevelProxy: any
  constructor() { }

  ngOnInit(): void {
  }

  isStart(levelCase){
    return this.currentLevelProxy.start.x===levelCase.x && this.currentLevelProxy.start.y===levelCase.y
  }

  isExit(levelCase){
    return this.currentLevelProxy.exit.x===levelCase.x && this.currentLevelProxy.exit.y==levelCase.y
  }
}
