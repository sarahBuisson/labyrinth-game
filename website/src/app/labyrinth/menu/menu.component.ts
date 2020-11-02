import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {AsciiModalComponent} from "../../utils/ascii/ascii-modal/ascii-modal.component";
import {HighscoresService} from "../service/highscores.service";
import {Subscription} from "rxjs";
import {SoundService} from "../service/sound/sound.service";
import {CHARACTER_SPACING} from "../../utils/ascii/AsciiConst";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`.container {
    display: flex;
    flex-direction: column;
    align-items:center;
    text-align: center;
  }


  .title pre{
    margin-left: auto;
    margin-right: auto;
    width: ${CHARACTER_SPACING * 60}px;
  }

  button {
    text-align: center;
    padding: 0 ${CHARACTER_SPACING * 4}px;
  }
  `]
})
export class MenuComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('highScoreModal') highScoreModal: AsciiModalComponent;
  @ViewChild('loadingModal') loadingModal: AsciiModalComponent;
  @ViewChild('newFormModal') newFormModal: AsciiModalComponent;
  @ViewChild('characterFormModal') characterFormModal: AsciiModalComponent;
  highscores: Array<any>;
  private subscriptionHighscores: Subscription;

  constructor(private router: Router, private highscoresService: HighscoresService, private soundService:SoundService) {
  }

  ngOnInit(): void {
    this.subscriptionHighscores = this.highscoresService.getScores().subscribe((scores) => {
      this.highscores = scores as Array<any>;
    })
    this.soundService.generateMenuMusic()
  }

  clickNew() {
    this.soundService.playMove()
    this.newFormModal.show()
  }

  clickMusic() {
    this.router.navigateByUrl('/music');
  }

  clickCharacter() {

    this.soundService.playMove()
    this.characterFormModal.show()
  }

  saveHighScore() {
    this.highscoresService.saveScore({name:'test'},Math.random()*100)
  }

  ngOnDestroy(): void {
    this.subscriptionHighscores.unsubscribe()
  }

  ngAfterViewInit(): void {
    this.soundService.playMenuMusic();
  }
}
