import {Injectable} from '@angular/core';
import {BehaviorSubject, PartialObserver, ReplaySubject, Subject, Subscription} from "rxjs";
import {scan} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  ambiant = new Audio();
  bruitage = new Audio();

  soundOnSubject$: Subject<boolean> = new BehaviorSubject<boolean>(false);
  soundOn$ = this.soundOnSubject$.pipe(scan((previousValue, forcedValue) => {


    let soundOn = forcedValue ? forcedValue : !previousValue;
    if (!soundOn) {
      this.ambiant.pause();
      this.bruitage.pause();
    } else {
      this.ambiant.play();
      this.bruitage.play();
    }
    return soundOn
  }));

  subscribeSoundOn(observer): Subscription {
    return this.soundOn$.subscribe(observer)
  }

  constructor() {
    document.body.addEventListener("mousemove", () => this.soundOnSubject$.next(true), {once: true})
  }

  playMove() {
    this.playBruitageMusic("walk");
  }

  playTake() {
    this.playBruitageMusic("take");
  }

  playNo() {
    this.playBruitageMusic("non");
  }

  playMenuMusic() {
    this.playAmbiantMusic("menu2");
  }

  private playAmbiantMusic(music) {
    this.ambiant.src = "./assets/audio/" + music + ".mp3";
    this.ambiant.loop = true;
    this.ambiant.load();

  }

  private async playBruitageMusic(music) {
    let soundOn = await this.soundOnSubject$.toPromise();
    if (soundOn) {
      console.log("bruitage")
      this.bruitage.src = "./assets/audio/" + music + ".mp3";
      this.bruitage.load();
      this.bruitage.play()
    }
  }

  playGameMusic() {
    this.playAmbiantMusic("donjon");
  }

  toogleSound() {
    this.soundOnSubject$.next()
  }
}
