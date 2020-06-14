import {Component, OnInit, ViewChild} from '@angular/core';
import {ServiceLabService} from "../service/service-lab.service";
import {kotlinProxyToJsView} from "../../utils/util";

// @ts-ignore
import gameRules from 'gameRules';
import {AsciiRenderService} from "./decor/ascii-render.service";
import {MapAsciiRenderService} from "./decor/map-ascii-render.service";
import {FullsizeAsciiRenderService} from "./decor/fullsize-ascii-render.service";
import {LevelViewComponent} from "./level-view/level-view.component";

@Component({
  selector: 'app-labyrinth-game',
  templateUrl: './labyrinth-game.component.html',
  styleUrls: ['./labyrinth-game.component.css']
})
export class LabyrinthGameComponent implements OnInit {
  currentParty: any
  currentLevel: any
  currentPartyProxy: any
  currentCharacterRenderData: CharacterData
  @ViewChild('level-view') levelView:LevelViewComponent;

  constructor(private labService: ServiceLabService,
              public fullViewRenderService: FullsizeAsciiRenderService,
              public mapRenderService: MapAsciiRenderService) {
  }

  ngOnInit(): void {
    this.subscribeCurrentParty()
    this.subscribeCharacterData()
  }

  log(data): void {
    console.log(data)
  }

  subscribeCurrentParty(): any {
    this.labService.getCurrentParty()
      .subscribe((c) => {
          this.currentParty = kotlinProxyToJsView(c, 0)
          console.log(this.currentParty)
          if (this.currentParty) {
            this.currentLevel = this.currentParty.level
            this.currentPartyProxy = kotlinProxyToJsView(this.currentParty, 7)
          }
        }
      )
    return this.currentParty
  }

  subscribeCharacterData(): any {
    this.labService.getCurrentCharaRenderData()
      .subscribe((c) => {
          this.currentCharacterRenderData = c;
        }
      )
    return this.currentCharacterRenderData
  }

  move(direction: string) {
    this.labService.move(this.currentParty, direction);
  }

  take() {
    this.labService.take(this.currentParty);
  }
}
