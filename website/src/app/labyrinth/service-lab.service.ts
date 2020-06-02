import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {Router} from "@angular/router";
// @ts-ignore
import gameRules from 'gameRules';
import {kotlinProxy} from '../utils/util.js'
@Injectable({
  providedIn: 'root'
})
export class ServiceLabService {

  constructor(private router:Router) {
  }

  currentParty: any

  generate(size): void {
    let party = kotlinProxy(gameRules.fr.perso.labyrinth.board.algorithm.composite, 0, true).initPartieComposite(size);
    this.currentParty=party
    this.router.navigateByUrl('/labyrinthGame');
  }

  getCurrentParty(): Observable<any> {

    return of(this.currentParty)
  }
}
