import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {Router} from "@angular/router";
// @ts-ignore
import gameRules from 'gameRules';
import {kotlinProxyToJsView} from '../utils/util.js'

@Injectable({
  providedIn: 'root'
})
export class ServiceLabService {

  constructor(private router: Router) {
    this.generate(3,false)
  }

  currentParty: any

  generate(size, reroute=true): void {
    let composite = kotlinProxyToJsView(gameRules.fr.perso.labyrinth.board.algorithm.composite, 0, false);

    console.log(composite)
    let party = {level: composite.generateCompositeFunction(size)}
    this.currentParty = party
    if(reroute)
    this.router.navigateByUrl('/labyrinthGame');
  }

  generateEmpty(size): void {
    let composite = kotlinProxyToJsView(gameRules.fr.perso.labyrinth.board.algorithm.composite, 0, false);

    console.log(composite)
    let party = {level: composite.connectAllZoneOfBoard(composite.generateEmptyBoardFunction(size))}
    this.currentParty = party
    this.router.navigateByUrl('/labyrinthGame');
  }

  getCurrentParty(): Observable<any> {

    return of(this.currentParty)
  }
}
