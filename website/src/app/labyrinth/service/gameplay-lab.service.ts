import {Injectable} from '@angular/core';
import {GenerateLabService} from "./generate-lab.service";
import {getJsViewFromKotlin, kotlinProxyToJsView} from "../../utils/kotlinUtils";
import * as gameRules from "gameRules";
import {DataStorageService} from "./data-storage.service";
import findKey from 'lodash/findKey';
import {SoundService} from "./sound/sound.service";

// @ts-ignore

@Injectable({
  providedIn: 'root'
})
export class GameplayLabService {
  currentParty: any;
  gameplay: any;

  constructor(private serviceLabService: GenerateLabService, private dataStorageService: DataStorageService, private soundService: SoundService) {
    dataStorageService
      .getCurrentParty()
      .subscribe((party) => {
      this.currentParty = party;
    })
    this.gameplay =gameRules.fr.perso.labyrinth.labeat

  }

  move(direction: string) {
    this.dataStorageService.saveCharacterDirection(direction);
    let connections = kotlinProxyToJsView(this.currentParty.player.location.connections,1)
    let nextLocation = connections[direction];
    if (nextLocation) {
      let door = this.currentParty.player.location.content.toArray()//getJsViewFromKotlin(this.currentParty, "player", "location", "content")
        .find(it => it.destination && it.destination.x === nextLocation.x && it.destination.y === nextLocation.y)
      if (door) {
        this.play(door)
        this.soundService.playMove()
      } else {
        this.soundService.playNo()
      }
      return true;
    }
  }

  take(objToTake) {
    this.dataStorageService.saveCharacterDirection('LEFT');
    this.currentParty.player.location.content//getJsViewFromKotlin(this.currentParty, "player", "location", "content")
      .filter(it => it.name === objToTake.name)
      .forEach((it) => this.play(it))

    this.soundService.playTake()
  }

  takeAll() {
   this.currentParty.player.location.content.toArray()
      .filter(it => it.destination === undefined)
      .forEach((it) => this.play(it))
    this.soundService.playTake()
  }

  private play(obj): void {

    let newParty = this.gameplay.playerInteractWith(this.currentParty, obj);
    this.dataStorageService.saveParty(newParty)
    return newParty

  }


  levelContent(levelCase) {
    return (levelCase ? levelCase.content : []).filter(it => !this.isDoor(it))
  }

  private isDoor(it) {
    return it.destination !== undefined
  }

  doorAt(levelCase, direction: string) {
    let destination = levelCase.connections ? levelCase.connections[direction] : undefined
    if (destination) {
      return levelCase.content.toArray().filter(it => it.destination && it.destination.x === destination.x && it.destination.y === destination.y)[0]
    }
  }


  moveAtCase(levelCase: any) {
    let connections = this.currentParty.player.location.connections
    let direction = findKey(connections, (it) => {
      return it && it.x === levelCase.x && it.y === levelCase.y
    })
    if (direction) {
      return this.move(direction)
    }
  }

  hasPlayer(levelCase: any) {
    return levelCase.content.find(p => p.type === "player") && true;
  }

  computePartieScore() {
    return this.gameplay.computePartieScore(this.currentParty)
  }
}
