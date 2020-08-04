import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {AsciiModalComponent} from "../../utils/ascii/ascii-modal/ascii-modal.component";
import {HighscoresService} from "../service/highscores.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  @ViewChild('highScoreModal') highScoreModal: AsciiModalComponent;
  @ViewChild('loadingModal') loadingModal: AsciiModalComponent;
  @ViewChild('newFormModal') newFormModal: AsciiModalComponent;
  @ViewChild('characterFormModal') characterFormModal: AsciiModalComponent;
  highscores: Array<any>;
  private subscriptionHighscores: Subscription;

  constructor(private router: Router, private highscoresService: HighscoresService) {
  }

  ngOnInit(): void {
    this.subscriptionHighscores=this.highscoresService.getScores().subscribe((scores) => {
      this.highscores = scores as Array<any>;
    })

  }

  clickNew() {

    this.newFormModal.show()
  }  clickCharacter() {
    this.characterFormModal.show()
  }

  saveHighScore() {
    this.highscoresService.saveScore({name:'test'},Math.random()*100)
  }

  ngOnDestroy(): void {
    this.subscriptionHighscores.unsubscribe()
  }
}
