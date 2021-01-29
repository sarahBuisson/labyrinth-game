import {Component, OnInit} from '@angular/core';
import {GameMusiqueService} from "../labyrinth/service/sound/game-musique.service";
import {createLoop, SoundService} from "../labyrinth/service/sound/sound.service";

import * as tone from "tone";

@Component({
  selector: 'app-music-view',
  templateUrl: './music-view.component.html',
  styleUrls: ['./music-view.component.css']
})
export class MusicViewComponent implements OnInit {

  constructor(private musiqueService: GameMusiqueService,
              private soundService: SoundService) {
  }

  currentMusicPartition: any;
  currentPart: any;
  currentInstrument: any;
  ngOnInit(): void {
  }

  generateMenuMusic() {
    this.changeMusic(this.musiqueService.menuMusicRandom())
  }

  generateGameMusic() {
    this.changeMusic(this.musiqueService.gameMusicRandom())
  }

  pause() {
    this.currentPart.stop(tone.now());
    this.currentInstrument.volume.value=-100;

  }

  play() {
    this.currentPart.start();
  }

  clear() {
    if (this.currentPart) {
      this.currentPart.stop()
    }
  }

  changeMusic(newPartition) {
    console.log("changeMusic")
    if (this.currentInstrument)
      this.currentInstrument.clear()
    this.currentInstrument = this.soundService.createInstrument();
    this.currentMusicPartition = newPartition;
    this.clear();
    this.currentPart = createLoop(this.currentInstrument, this.currentMusicPartition);

    this.currentInstrument.volume = -40;
    this.soundService.playAmbiantMusic(this.currentPart, this.currentInstrument);
  }
}
