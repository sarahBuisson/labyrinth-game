import {Injectable} from '@angular/core';

import {Observable, of, ReplaySubject, Subject} from 'rxjs';
import {Router} from "@angular/router";
import * as gameRules from 'gameRules';
// @ts-ignore

import {DataStorageService} from "./data-storage.service";
import {SoundService} from "./sound/sound.service";

let labeatGeneration = gameRules.fr.perso.labyrinth.labeat.generation;

@Injectable({
  providedIn: 'root'
})
export class GenerateLabService {

  constructor(private router: Router,
              private dataStorageService: DataStorageService,
              private soundService: SoundService) {
    this.generateSpirale()
  }


  generate(size, playerName: string): void {
    let party = labeatGeneration.initPartieMapLabWithKey(size, playerName) //labeatGeneration.initPartieCompositeLabWithKeyFunction(size)
    this.dataStorageService.saveParty(party)
    this.soundService.generateGameMusic();
  }

  generateEmpty(size): void {
    let party = {level: labeatGeneration.connectAllZoneOfBoard(labeatGeneration.generateEmptyBoard(size))}
    this.dataStorageService.saveParty(party)
    this.router.navigateByUrl('/game');
  }

  generateSpirale(): void {
    let party = labeatGeneration.initPartieSpiral()
    this.dataStorageService.saveParty(party)
  }
}
