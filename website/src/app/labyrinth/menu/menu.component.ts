import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {AsciiModalComponent} from "../../utils/ascii/ascii-modal/ascii-modal.component";
import {HighscoresService} from "../service/highscores.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild('highScoreModal') highScoreModal: AsciiModalComponent;
  @ViewChild('loadingModal') loadingModal: AsciiModalComponent;
  @ViewChild('newFormModal') newFormModal: AsciiModalComponent;
  highscores: Array<any>;

  constructor(private router: Router, private highscoresService: HighscoresService) {
  }

  ngOnInit(): void {
    this.highscoresService.getScores().subscribe((scores) => {
      this.highscores = scores as Array<any>;
    })

  }

  clickNew() {
    this.newFormModal.show()
  }

  saveHighScore() {
    this.highscoresService.saveScore({name:'test'},Math.random()*100)
  }
}
