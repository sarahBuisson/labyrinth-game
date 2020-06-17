import {Injectable} from '@angular/core';

import {Observable, of, ReplaySubject, Subject} from 'rxjs';
import {Router} from "@angular/router";
// @ts-ignore
import gameRules from 'gameRules';
import {getFromKotlin, getJsViewFromKotlin, kotlinProxyToJsView} from '../../utils/util.js'
import {CharacterFormComponent} from "../../characterEditor/character-form/character-form.component";

import {CharacterRenderData} from "../../characterEditor/character-render.service";
import {DataStorageService} from "./data-storage.service";

let composite = kotlinProxyToJsView(gameRules.fr.perso.labyrinth.board.algorithm.composite, 0, false);

@Injectable({
  providedIn: 'root'
})
export class GenerateLabService {

  constructor(private router: Router, private dataStorageService: DataStorageService) {
    this.dataStorageService.saveCharacter(new CharacterRenderData());
  }


  generate(size, reroute = true): void {
    let party = composite.initPartieCompositeFunction(size) //composite.initPartieCompositeLabWithKeyFunction(size)
    this.dataStorageService.saveParty(party)
    if (reroute)
      this.router.navigateByUrl('/labyrinthGame');
  }

  generateEmpty(size): void {
    let party = {level: composite.connectAllZoneOfBoard(composite.generateEmptyBoardFunction(size))}
    this.dataStorageService.saveParty(party)
    this.router.navigateByUrl('/labyrinthGame');
  }

}
