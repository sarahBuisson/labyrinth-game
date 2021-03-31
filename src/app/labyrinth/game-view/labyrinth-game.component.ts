import {Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';

import {GenerateLabService} from "../service/generate-lab.service";
import {parseKotlinToJsView} from "../../utils/kotlinUtils";
import {MapAsciiRenderService} from "../service/render/map-ascii-render.service";
import {FullsizeAsciiRenderService} from "../service/render/fullsize-ascii-render.service";
import {LevelViewComponent} from "./level-view/level-view.component";
import {DataStorageService} from "../service/data-storage.service";
import {GameplayLabService} from "../service/gameplay-lab.service";
import {AsciiModalComponent} from "../../utils/ascii/ascii-modal/ascii-modal.component";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {SoundService} from "../service/sound/sound.service";
import {CHARACTER_SPACING, LINE_HEIGHT} from "../../utils/ascii/AsciiConst";
import {APP_BASE_HREF} from "@angular/common";

@Component({
  selector: 'app-labyrinth-game',
  templateUrl: './labyrinth-game.component.html',
  styleUrls: ['./labyrinth-game.component.css'],

  styles: [`
    .container {
      display: grid;
      grid-template-columns: ${CHARACTER_SPACING * 100}px ${CHARACTER_SPACING * 4}px;
      grid-template-rows: ${LINE_HEIGHT * 45}px ${LINE_HEIGHT * 8}px;
      grid-template-areas:
    "main sidebar"
    "toolbar toolbar";
      margin-left: auto;
      margin-right: auto;
      width: ${CHARACTER_SPACING * 110}px;
      overflow-x: hidden;
    }

    .menuBar {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }

    .toolbar {
      z-index: 100;
      grid-area: toolbar;
      display: grid;
      grid-template-columns: ${CHARACTER_SPACING * 100}px ${CHARACTER_SPACING * 6}px 1fr;
    }

    .noPartyMessage {
      padding: ${LINE_HEIGHT * 1}px ${CHARACTER_SPACING * 1}px;
    }

  `]
})
export class LabyrinthGameComponent implements OnInit, OnDestroy {
  currentParty: any
  currentLevel: any
  @ViewChild('level-view') levelView: LevelViewComponent;
  @ViewChild('winModal') winModal: AsciiModalComponent;
  @ViewChild('loadingModal') loadingModal;
  score: any;
  private subscriptionCurrentParty: Subscription;
  private toClear: any[] = [];

  constructor(private labService: GenerateLabService,
              private dataStorageService: DataStorageService,
              private gameplayLabService: GameplayLabService,
              public fullViewRenderService: FullsizeAsciiRenderService,
              public mapRenderService: MapAsciiRenderService,
              private router: Router,
              private soundService: SoundService,
  ) {
  }

  ngOnInit(): void {

    this.subscribeCurrentParty()
    this.soundService.playGameMusic()
  }

  subscribeCurrentParty(): any {
    this.subscriptionCurrentParty = this.dataStorageService.getCurrentPartyView()
      .subscribe((nextParty) => {

          this.currentParty = nextParty
          if (nextParty) {
            if (this.currentParty.status == "WIN") {
              this.winModal.show()
            }
            this.score = this.gameplayLabService.computePartieScore();
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

  ngOnDestroy(): void {
    this.subscriptionCurrentParty.unsubscribe();
    this.toClear.forEach((timer) => clearInterval(timer))
  }

  nextLevel(): void {
    this.loadingModal.show();
    this.winModal.hide();

    let timer = new Promise((resolve) => {
      // after 1 second signal that the job is finished with an error
      this.toClear.push(setTimeout(() => resolve('done'), 5000));
    });
    let generation = new Promise((resolve) => {
      // not taking our time to do the job
      resolve(this.labService.generate((parseInt(this.score.size) + 1), this.currentParty.player.name)); // immediately give the result: 123

    });

    Promise.all([timer, generation]).then(() => {
      this.loadingModal.hide()
      this.router.navigateByUrl('/game');
    })

  }

}

