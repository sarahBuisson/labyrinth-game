import {Injectable} from '@angular/core';
import {Observable, ReplaySubject, Subject} from "rxjs";
import {CharacterRenderData} from "./render/character-render.service";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  currentParty$: Subject<any> = new ReplaySubject<any>(1);
  lastMessage$: Subject<any> = new ReplaySubject<any>(1);
  characterDirection$: Subject<any> = new ReplaySubject<any>(1);
  currentCharaRenderData$: Subject<CharacterRenderData> = new ReplaySubject<CharacterRenderData>(1);

  constructor() {
    this.characterDirection$.next('LEFT')
    this.currentCharaRenderData$.next(new CharacterRenderData())
  }

  saveParty(party: { level: any }) {

    this.currentParty$.next(party)
  }

  saveLastMessages(...messages: string[]) {

    this.lastMessage$.next(messages[messages.length - 1])
  }

  getCurrentParty(): Observable<any> {
    return this.currentParty$
  }


  saveCharacter(chardata: CharacterRenderData) {
    this.currentCharaRenderData$.next(chardata)
  }

  saveCharacterDirection(direction) {
    this.characterDirection$.next(direction)
  }

  getCurrentCharaRenderData() {
    return this.currentCharaRenderData$
  }

  getPlayerDirection() {
    return this.characterDirection$
  }
}
