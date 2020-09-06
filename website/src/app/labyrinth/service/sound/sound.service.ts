import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, PartialObserver, ReplaySubject, Subject, Subscription} from "rxjs";
import {scan} from "rxjs/operators";
import {GameMusiqueService} from "./game-musique.service";

import * as tone from "tone/build/tone.js";
import * as InstrumentUtils from "music-generator/dist/instrumentUtils"

@Injectable({
  providedIn: 'root'
})
export class SoundService implements OnDestroy {


  currentInstrument;


  soundOnSubject$: Subject<boolean> = new BehaviorSubject<boolean>(false);
  soundOn$ = this.soundOnSubject$.pipe(scan((previousValue, forcedValue) => {
    console.log("toggle")

    let soundOn = forcedValue ? forcedValue : !previousValue;
    if (!soundOn) {
      tone.Destination.mute = true
      //   this.currentSound && this.currentSound.pause();
    } else {
      tone.Destination.mute = false
      //  this.currentSound && this.currentSound.play();
    }
    this.soundOn = soundOn;
    return soundOn
  }));
  private gameMusic: any;
  private menuMusic: any;
  private soundOn: boolean;

  subscribeSoundOn(observer): Subscription {
    return this.soundOn$.subscribe(observer)
  }

  constructor(private gameMusiqueService: GameMusiqueService) {
    document.body.addEventListener("mousemove", () => this.soundOnSubject$.next(true), {once: true})
    this.currentInstrument = InstrumentUtils.instrumentSamples.piano;
    let ntry=0
    while (!this.gameMusic && ntry<5) {
      try {ntry++;
        this.gameMusic = this.gameMusiqueService.gameMusicRandom();
      } catch (e) {
        console.error(e)
      }
    }
    ntry=0
    while (!this.menuMusic && ntry<5) {
      try {
        ntry++;
        this.menuMusic = this.gameMusiqueService.menuMusicRandom();
      } catch (e) {
        console.error(e)
      }
    }
    document.querySelector('body')?.addEventListener('click', async () => {
      if (tone.Tone) {
        await tone.Tone.start()
        console.log('audio is ready')
      }
    });
  }

  playMove() {
   // this.playBruitageSound(this.walkSound);
  }

  playTake() {
   // this.playBruitageSound(this.takeSound);
  }

  playNo() {
   // this.playBruitageSound(this.noSound);
  }

  playMenuMusic() {
    try {
      InstrumentUtils.play(this.menuMusic)
    } catch (e) {
      console.error(e);
    }
  }

  private async playBruitageSound(music) {

  }

  playGameMusic() {
    try {
      InstrumentUtils.play(this.gameMusic)
    } catch (e) {
      console.error(e);
    }

  }

  toogleSound() {
    this.soundOnSubject$.next()
  }

  ngOnDestroy(): void {
  }
}
