import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject, Subscription} from "rxjs";
import {scan} from "rxjs/operators";
import {GameMusiqueService} from "./game-musique.service";

import * as tone from "tone";
import {compositionUtils, rhythmUtils, Note, instrumentUtils} from "music-generator"

@Injectable({
  providedIn: 'root'
})
export class SoundService implements OnDestroy {

  soundOnSubject$: Subject<boolean> = new BehaviorSubject<boolean>(false);
  soundOn$ = this.soundOnSubject$.pipe(scan((previousValue, forcedValue) => {


    let soundOn = forcedValue ? forcedValue : !previousValue;
    if (!soundOn) {
      console.warn("mute")
      tone.Destination.mute = true;

    } else {
      console.warn("unmute")
      tone.Destination.mute = false;
    }
    this.soundOn = soundOn;
    return soundOn
  }));

  private soundOn: boolean;
  private toneHaveBeenInitialized: boolean = false;


  private gameMusic: tone.Part;
  private menuMusic: tone.Part;
  private currentAmbiance: tone.Part;

  private moveSound: any;
  private noSound: any;
  private takeSound: any;
  private ambiantInstrument: tone.Synth<any>;
  private menuInstrument: tone.Synth<any>;
  private gameInstrument: tone.Synth<any>;
  private soundInstrument: tone.Synth<any>;

  subscribeSoundOn(observer): Subscription {
    return this.soundOn$.subscribe(observer)
  }

  constructor(private gameMusiqueService: GameMusiqueService) {
    // document.body.addEventListener("mousemove", () => this.soundOnSubject$.next(true), {once: true})


    document.querySelector('body') && document.querySelector('body').addEventListener('click', async () => {
      if (tone && !this.toneHaveBeenInitialized) {
        tone.start();
        //this.currentAmbiance.volume-=10
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


    this.menuInstrument = new tone.Synth();

    this.gameInstrument = new tone.Synth();
    this.soundInstrument = new tone.Synth();
    this.gameInstrument.toDestination();
    this.menuInstrument.toDestination();
    this.soundInstrument.toDestination();
    this.soundInstrument.volume.value -= 35
    this.moveSound = this.gameMusiqueService.moveMusic();
    this.takeSound = this.gameMusiqueService.takeMusic();
    this.noSound = this.gameMusiqueService.noMusic();
  }

  generateMenuMusic() {
    this.tryNTimes(5, () => {
      if (!this.menuMusic)
        this.menuMusic = createLoop(this.menuInstrument, this.gameMusiqueService.menuMusicRandom(), 1.3);
    });
  }

  generateGameMusic() {
    this.tryNTimes(5, () => {
      if (!this.gameMusic)
        this.gameMusic = createLoop(this.gameInstrument, this.gameMusiqueService.gameMusicRandom(), 0.8);
    });
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
    play(this.soundInstrument, this.moveSound, 0.5)
  }

  playTake() {
    play(this.soundInstrument, this.takeSound, 0.5)
  }

  playNo() {
    play(this.soundInstrument, this.noSound, 0.5)
  }

  async playMenuMusic() {
    return this.playAmbiantMusic(this.menuMusic, this.menuInstrument);
  }


  public async playAmbiantMusic(newMusic:tone.Part<any>, instrument) {
    console.log("new music to play")
    if (this.currentAmbiance) {
      this.currentAmbiance.loop = false;
      this.currentAmbiance.mute = true
      await this.currentAmbiance.stop(tone.now())
      this.ambiantInstrument.volume.value-=100;
    }
    newMusic.loop = true;
    this.currentAmbiance = newMusic;
    this.ambiantInstrument = instrument;
    this.ambiantInstrument.volume.value=-45;
    return newMusic.start()
  }

  private async playBruitageSound(music) {

  }

  async playGameMusic() {
    return this.playAmbiantMusic(this.gameMusic, this.gameInstrument);

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

export function createLoop(instrument, partition: Array<any>, tempo = 1): tone.Part {
  let flatpartition = compositionUtils.flatPartition(partition)
  let timeC = 0;

  let part = new tone.Part((time, note: Note) => {
    let decalage = rhythmUtils.duration(note.value) * tempo;
    instrument.triggerAttackRelease(note.tune, note.value, "+" + timeC)
    timeC += decalage
    //time = InstrumentUtils.playNote(instrument, n, time, 1.2)
  }, flatpartition.map((note) => [0, note]));
  part.loop = true;
  return part;
}

export function play(instrument, partition: Array<any>, tempo = 1) {
  let flatpartition = compositionUtils.flatPartition(partition)
  let now = tone.now()
  instrument.toDestination()
  for (let i = 0; i < 1; i++) {
    flatpartition.forEach((n) => {
      now = instrumentUtils.playNote(instrument, n, now, tempo)
    })
  }
}
