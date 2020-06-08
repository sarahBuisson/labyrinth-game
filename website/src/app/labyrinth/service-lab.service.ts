import {Injectable} from '@angular/core';

import {Observable, of, ReplaySubject, Subject} from 'rxjs';
import {Router} from "@angular/router";
// @ts-ignore
import gameRules from 'gameRules';
import {getFromKotlin, getJsViewFromKotlin, kotlinProxyToJsView} from '../utils/util.js'
import {CharacterFormComponent} from "../characterEditor/character-form/character-form.component";

import { CharacterRenderData} from "../characterEditor/character-render.service";
let composite = kotlinProxyToJsView(gameRules.fr.perso.labyrinth.board.algorithm.composite, 0, false);

@Injectable({
  providedIn: 'root'
})
export class ServiceLabService {

  constructor(private router: Router) {
    // @ts-ignore
    this.currentCharaRenderData$.next(new CharacterRenderData())
  }

  currentParty$: Subject<any> = new ReplaySubject<any>(1);
  currentCharaRenderData$: Subject<any> = new ReplaySubject<any>(1);


  generate(size, reroute = true): void {
    let party = composite.initPartieCompositeFunction(size) //composite.initPartieCompositeLabWithKeyFunction(size)
    this.currentParty$.next(party)
    if (reroute)
      this.router.navigateByUrl('/labyrinthGame');
  }

  generateEmpty(size): void {
    let party = {level: composite.connectAllZoneOfBoard(composite.generateEmptyBoardFunction(size))}
    this.currentParty$.next(party)
    this.router.navigateByUrl('/labyrinthGame');
  }

  getCurrentParty(): Observable<any> {
    return this.currentParty$
  }


  move(currentParty,direction: string) {
    let connections = getJsViewFromKotlin(currentParty, "player", "location", "connections")
    let nextLocation = connections[direction];
    if (nextLocation) {
      let door = getJsViewFromKotlin(currentParty, "player", "location", "content")
        .find(it => it.destination && it.destination.x === nextLocation.x && it.destination.y === nextLocation.y)
      if (door) {
        this.play(currentParty, door)
      }
    }
  }

  take(currentParty) {
    getJsViewFromKotlin(currentParty, "player", "location", "content")
      .filter(it => it.destination === undefined)
      .forEach((it) => this.play(currentParty, it))

  }

  play(partie, obj): void {
    let gameplay = kotlinProxyToJsView(gameRules.fr.perso.labyrinth.freezone.gameplay, 0, false);


    let newPartie = gameplay.playerInteractWithFunction(partie, obj);
    this.currentParty$.next(newPartie);
    return newPartie

  }

  saveCharacter(chardata: CharacterRenderData) {
    this.currentCharaRenderData$.next(chardata)
  }

  getCurrentCharaRenderData() {
    return this.currentCharaRenderData$
  }
}
