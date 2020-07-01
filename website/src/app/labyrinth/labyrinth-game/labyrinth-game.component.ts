import {Component, OnInit, ViewChild} from '@angular/core';
import {GenerateLabService} from "../service/generate-lab.service";
import {kotlinProxyToJsView} from "../../utils/util";

// @ts-ignore
import gameRules from 'gameRules';
import {AsciiRenderService} from "./decor/ascii-render.service";
import {MapAsciiRenderService} from "./decor/map-ascii-render.service";
import {FullsizeAsciiRenderService} from "./decor/fullsize-ascii-render.service";
import {LevelViewComponent} from "./level-view/level-view.component";
import {DataStorageService} from "../service/data-storage.service";
import {GameplayLabService} from "../service/gameplay-lab.service";

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

  constructor(private labService: GenerateLabService,
              private dataStorageService:DataStorageService,
              private gameplayLabService:GameplayLabService,
              public fullViewRenderService: FullsizeAsciiRenderService,
              public mapRenderService: MapAsciiRenderService) {
  }

  ngOnInit(): void {
    this.subscribeCurrentParty()
    this.subscribeCharacterData()
  }

  subscribeCurrentParty(): any {
    this.dataStorageService.getCurrentParty()
      .subscribe((c) => {
          this.currentParty = kotlinProxyToJsView(c, 0)
          if (this.currentParty) {
            this.currentLevel = this.currentParty.level
            this.currentPartyProxy = kotlinProxyToJsView(this.currentParty, 7)
          }
        }
      )
    return this.currentParty
  }

  subscribeCharacterData(): any {
    this.dataStorageService.getCurrentCharaRenderData()
      .subscribe((c) => {
          this.currentCharacterRenderData = c;
        }
      )
    return this.currentCharacterRenderData
  }

  move(direction: string) {
    this.gameplayLabService.move(direction);
  }

  take() {
    this.gameplayLabService.takeAll();
  }
}
