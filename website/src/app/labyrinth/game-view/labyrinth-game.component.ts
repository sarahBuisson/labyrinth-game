import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {GenerateLabService} from "../service/generate-lab.service";
import {kotlinProxyToJsView} from "../../utils/kotlinUtils";

// @ts-ignore
import gameRules from 'gameRules';
import {AsciiRenderService} from "../service/render/ascii-render.service";
import {MapAsciiRenderService} from "../service/render/map-ascii-render.service";
import {FullsizeAsciiRenderService} from "../service/render/fullsize-ascii-render.service";
import {LevelViewComponent} from "./level-view/level-view.component";
import {DataStorageService} from "../service/data-storage.service";
import {GameplayLabService} from "../service/gameplay-lab.service";
import {AsciiModalComponent} from "../../utils/ascii/ascii-modal/ascii-modal.component";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {SoundService} from "../service/sound/sound.service";
import {CharacterRenderData} from "../../characterEditor/character-render.service";

@Component({
  selector: 'app-labyrinth-game',
  templateUrl: './labyrinth-game.component.html',
  styleUrls: ['./labyrinth-game.component.css']
})
export class LabyrinthGameComponent implements OnInit, OnDestroy {
  currentParty: any
  currentLevel: any
  currentPartyProxy: any
  @ViewChild('level-view') levelView:LevelViewComponent;
  @ViewChild('winModal') winModal:AsciiModalComponent;
  score: any;
  private subscriptionCurrentParty: Subscription;

  constructor(private labService: GenerateLabService,
              private dataStorageService:DataStorageService,
              private gameplayLabService:GameplayLabService,
              public fullViewRenderService: FullsizeAsciiRenderService,
              public mapRenderService: MapAsciiRenderService,
              private router:Router, private soundService:SoundService) {
  }

  ngOnInit(): void {
    this.subscribeCurrentParty()
    this.soundService.playGameMusic()
  }

  subscribeCurrentParty(): any {
    this.subscriptionCurrentParty = this.dataStorageService.getCurrentParty()
      .subscribe((c) => {
          this.currentParty = kotlinProxyToJsView(c, 0)
          if (this.currentParty) {
            this.currentLevel = this.currentParty.level
            this.currentPartyProxy = kotlinProxyToJsView(this.currentParty, 5)

            if (this.currentPartyProxy.status.name$ == "WIN") {
              this.winModal.show()
            }


            let kotlinScore = this.gameplayLabService.computePartieScore();
            this.score = kotlinProxyToJsView(kotlinScore, 3)
          }
        }
      )
    return this.currentParty
  }

  move(direction: string) {
    this.gameplayLabService.move(direction);
  }

  take() {
    this.gameplayLabService.takeAll();
  }

  nextLevel() {
    this.router.navigateByUrl('/new?size=' + (parseInt(this.score.size)+1));
  }

  ngOnDestroy(): void {
    this.subscriptionCurrentParty.unsubscribe();
  }
}

