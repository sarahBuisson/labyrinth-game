import {Injectable} from '@angular/core';
import * as tone from "tone";

@Injectable({
  providedIn: 'root'
})
export class ToneService {

  constructor() {
  }

  public Synth() {
    return new tone.Synth()
  };

  start() {
    tone.start();
  }
}
