import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject, Subscription} from "rxjs";
import {scan} from "rxjs/operators";
import {GameMusiqueService} from "./game-musique.service";

import * as tone from "tone/build/tone.js";
import * as CompositionUtils from "music-generator/dist/compositionUtils"
import * as rhytmeUtils from "music-generator/dist/rhythmUtils"
import {flatPartition} from "music-generator/dist/compositionUtils";
import {instrumentSamples, playNote} from "music-generator/dist/instrumentUtils";

@Injectable({
  providedIn: 'root'
})
export class SoundService implements OnDestroy {


  currentAmbiance: any

  soundOnSubject$: Subject<boolean> = new BehaviorSubject<boolean>(false);
  soundOn$ = this.soundOnSubject$.pipe(scan((previousValue, forcedValue) => {


    let soundOn = forcedValue ? forcedValue : !previousValue;
    if (!soundOn) {
      console.warn("mute")
      tone.Destination.mute = true;

    } else {
      console.warn("unmute")
      tone.mute = false;
      tone.Destination.mute = false;
    }
    this.soundOn = soundOn;
    return soundOn
  }));

  private soundOn: boolean;
  private toneHaveBeenInitialized: boolean = false;


  private gameMusic: any;
  private menuMusic: any;

  private moveSound: any;
  private noSound: any;
  private takeSound: any;
  private ambiantInstrument: any;
  private soundInstrument: any;

  subscribeSoundOn(observer): Subscription {
    return this.soundOn$.subscribe(observer)
  }

  constructor(private gameMusiqueService: GameMusiqueService) {
    // document.body.addEventListener("mousemove", () => this.soundOnSubject$.next(true), {once: true})


    document.querySelector('body')?.addEventListener('click', async () => {
      if (tone && !this.toneHaveBeenInitialized) {
        tone.start();
        console.log('audio is ready');
        this.forceSoundOn()
        this.toneHaveBeenInitialized = true;
        tone.Transport.start()
      } else if (this.toneHaveBeenInitialized) {
        console.log("audio already ready")
      } else {

        console.error('audio not ready')
      }
    });


    this.ambiantInstrument = new tone.Synth();
    this.soundInstrument = new tone.Synth();
    this.ambiantInstrument.toDestination();
    this.soundInstrument.toDestination();
    this.tryNTimes(5, () => {
      if (!this.menuMusic)
        this.menuMusic = createLoop(this.ambiantInstrument, this.gameMusiqueService.menuMusicRandom());
    });

    this.tryNTimes(5, () => {
      if (!this.gameMusic)
        this.gameMusic = createLoop(this.ambiantInstrument, this.gameMusiqueService.gameMusicRandom());
    });


    this.moveSound = this.gameMusiqueService.moveMusic();
    this.takeSound = this.gameMusiqueService.takeMusic();
    this.noSound = this.gameMusiqueService.noMusic();
  }

  private tryNTimes(numberOfTry, callback) {
    while (numberOfTry > 0) {
      console.log("try generate menu music")
      try {
        numberOfTry--;
        callback()
      } catch (e) {
        console.error(e)
      }
    }
  }

  playMove() {
    this.ambiantInstrument.mute = true
    play(this.soundInstrument, this.moveSound)
    this.ambiantInstrument.mute = false
  }

  playTake() {
    this.ambiantInstrument.mute = true
    play(this.soundInstrument, this.takeSound)
    this.ambiantInstrument.mute = false
  }

  playNo() {
    this.ambiantInstrument.mute = true
    play(this.soundInstrument, this.noSound)
    this.ambiantInstrument.mute = false
  }

  async playMenuMusic() {
    try {
      console.log("playMenuMusic" + this.menuMusic)
      this.menuMusic.loop = true;
      await this.menuMusic.start()

      this.currentAmbiance = this.menuMusic;
    } catch (e) {
      console.error(e);
    }
  }

  private async playBruitageSound(music) {

  }

  playGameMusic() {
    try {
      this.gameMusic.loop = true;
      this.gameMusic.start()
      this.currentAmbiance = this.gameMusic;
    } catch (e) {
      console.error(e);
    }

  }

  toogleSound() {
    this.soundOnSubject$.next()
  }

  forceSoundOn() {
    this.soundOnSubject$.next(true)

  }

  ngOnDestroy(): void {
    if (this.menuMusic) {
      this.menuMusic.dispose()
    }
    if (this.gameMusic) {
      this.gameMusic.dispose()
    }
    this.noSound.dispose()
    this.takeSound.dispose()
    this.moveSound.dispose()
    this.ambiantInstrument.dispose()
  }
}

export function createLoop(instrument, partition: Array<any>) {
  let tempo = 1.2;
  let flatpartition = CompositionUtils.flatPartition(partition)
  let timeC = 0;

  return new tone.Part((time, note) => {
    let decalage = rhytmeUtils.duration(note.value) * tempo;
    instrument.triggerAttackRelease(note.tune, note.value, "+" + timeC)
    timeC += decalage
    //time = InstrumentUtils.playNote(instrument, n, time, 1.2)
  }, flatpartition.map((note) => [0, note]));
}

export function play(instrument, partition: Array<any>, tempo = 1) {
  let flatpartition = flatPartition(partition)
  let now = tone.now()

  instrument.toDestination()
  for (let i = 0; i < 1; i++) {
    flatpartition.forEach((n) => {
      now = playNote(instrument, n, now)
    })
  }
}
