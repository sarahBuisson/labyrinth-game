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
  instrument = new tone.Synth().toDestination();
  instrument2 = new tone.Synth().toDestination();

  ngOnInit(): void {
  }

  generateMenuMusic() {
    this.changeMusic(this.musiqueService.menuMusicRandom(), this.instrument)
  }

  generateGameMusic() {
    this.changeMusic(this.musiqueService.gameMusicRandom(), this.instrument2)
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

  changeMusic(newPartition, instrument) {
    console.log("changeMusic")
    this.currentMusicPartition = newPartition;
    this.clear();
    this.currentPart = createLoop(instrument, this.currentMusicPartition);
    this.currentInstrument=instrument
    this.currentInstrument.volume=-40;
    this.soundService.playAmbiantMusic(this.currentPart, instrument);
  }
}
