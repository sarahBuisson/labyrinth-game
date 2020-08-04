import { Injectable } from '@angular/core';
import {Observable, ReplaySubject, Subject} from "rxjs";
import {CharacterRenderData} from "../../characterEditor/character-render.service";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService  {

  constructor() { }



  currentParty$: Subject<any> = new ReplaySubject<any>(1);
  currentCharaRenderData$: Subject<any> = new ReplaySubject<any>(1);


  saveParty(party: { level: any }) {
    this.currentParty$.next(party)
  }

  getCurrentParty(): Observable<any> {
    return this.currentParty$
  }



  saveCharacter(chardata: CharacterRenderData) {
    this.currentCharaRenderData$.next(chardata)
  }

  getCurrentCharaRenderData() {
    return this.currentCharaRenderData$
  }
}
