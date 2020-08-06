import {Injectable} from '@angular/core';

import {Observable, of, ReplaySubject, Subject} from 'rxjs';
import {Router} from "@angular/router";
// @ts-ignore
import gameRules from 'gameRules';
import { kotlinProxyToJsView } from '../../utils/kotlinUtils.js'

import {CharacterRenderData} from "../../characterEditor/character-render.service";
import {DataStorageService} from "./data-storage.service";

let labeatGeneration = kotlinProxyToJsView(gameRules.fr.perso.labyrinth.labeat.generation, 0, false);
console.log(labeatGeneration)
@Injectable({
  providedIn: 'root'
})
export class GenerateLabService {

  constructor(private router: Router, private dataStorageService: DataStorageService) {
    this.dataStorageService.saveCharacter(new CharacterRenderData());
  }


  generate(size, playerName: string): void {
    let party = labeatGeneration.initPartieMapLabWithKeyFunction(size, playerName) //labeatGeneration.initPartieCompositeLabWithKeyFunction(size)
    this.dataStorageService.saveParty(party)


  }

  generateEmpty(size): void {
    let party = {level: labeatGeneration.connectAllZoneOfBoard(labeatGeneration.generateEmptyBoardFunction(size))}
    this.dataStorageService.saveParty(party)
    this.router.navigateByUrl('/labyrinthGame');
  }

}
