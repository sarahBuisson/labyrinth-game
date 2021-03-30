import {Injectable} from '@angular/core';
import {Observable, ReplaySubject, Subject} from "rxjs";
import {CharacterRenderData} from "./render/character-render.service";
import * as gameRules from "gameRules";
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  currentParty$: Subject<any> = new ReplaySubject<any>(1);
  currentPartyView$: Subject<any> = new ReplaySubject<any>(1);
  lastMessage$: Subject<any> = new ReplaySubject<any>(1);
  characterDirection$: Subject<any> = new ReplaySubject<any>(1);
  currentCharaRenderData$: Subject<CharacterRenderData> = new ReplaySubject<CharacterRenderData>(1);
  gameplay:any;
  constructor() {
    this.characterDirection$.next('LEFT')
    this.currentCharaRenderData$.next(new CharacterRenderData())
    this.gameplay = gameRules.fr.perso.labyrinth.labeat
  }

  saveParty(party: { level: any }) {

    this.currentParty$.next(party)
    this.currentPartyView$.next(JSON.parse(this.gameplay.toJson(party)))
  }

  saveLastMessages(...messages: string[]) {

    this.lastMessage$.next(messages[messages.length - 1])
  }

  getCurrentParty(): Observable<any> {
    return this.currentParty$
  }

  getCurrentPartyView(): Observable<any> {
    return this.currentPartyView$
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
