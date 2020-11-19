import {Injectable} from '@angular/core';

import {Observable, of, ReplaySubject, Subject} from 'rxjs';
import {Router} from "@angular/router";
// @ts-ignore
import gameRules from 'gameRules';
// @ts-ignore
import {kotlinProxyToJsView} from '../../utils/kotlinUtils'

import {DataStorageService} from "./data-storage.service";
import {SoundService} from "./sound/sound.service";

let labeatGeneration = kotlinProxyToJsView(gameRules.fr.perso.labyrinth.labeat.generation, 0, false);
@Injectable({
  providedIn: 'root'
})
export class GenerateLabService {

  constructor(private router: Router,
              private dataStorageService: DataStorageService,
              private soundService:SoundService) {
  }


  generate(size, playerName: string): void {
    let party = labeatGeneration.initPartieMapLabWithKeyFunction(size, playerName) //labeatGeneration.initPartieCompositeLabWithKeyFunction(size)
    this.dataStorageService.saveParty(party)
    this.soundService.generateGameMusic();
  }

  generateEmpty(size): void {
    let party = {level: labeatGeneration.connectAllZoneOfBoard(labeatGeneration.generateEmptyBoardFunction(size))}
    this.dataStorageService.saveParty(party)
    this.router.navigateByUrl('/game');
  }
}
