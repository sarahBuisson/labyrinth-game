import {Injectable} from '@angular/core';
import {GenerateLabService} from "./generate-lab.service";
import {getJsViewFromKotlin, kotlinProxyToJsView} from "../../utils/util";
// @ts-ignore
import gameRules from "gameRules";
import {DataStorageService} from "./data-storage.service";

@Injectable({
  providedIn: 'root'
})
export class GameplayLabService {
  currentParty: any;

  constructor(private serviceLabService: GenerateLabService, private dataStorageService: DataStorageService) {
    dataStorageService.getCurrentParty().subscribe((party) => {
      this.currentParty = party;
    })
  }


  move(direction: string) {

    let connections = getJsViewFromKotlin(this.currentParty, "player", "location", "connections")
    let nextLocation = connections[direction];
    if (nextLocation) {
      let door = getJsViewFromKotlin(this.currentParty, "player", "location", "content")
        .find(it => it.destination && it.destination.x === nextLocation.x && it.destination.y === nextLocation.y)
      if (door) {
        this.play(door)
      }
    }
  }

  take(objToTake) {
    getJsViewFromKotlin(this.currentParty, "player", "location", "content")
      .filter(it => it.name === objToTake.name)
      .forEach((it) => this.play(it))

  }
  takeAll() {
    getJsViewFromKotlin(this.currentParty, "player" , "location", "content")
      .filter(it => it.destination===undefined)
      .forEach((it) => this.play(it))
  }

  private play(obj): void {
    let gameplay = kotlinProxyToJsView(gameRules.fr.perso.labyrinth.freezone.gameplay, 0, false);

    let newParty = gameplay.playerInteractWithFunction(this.currentParty, obj);
    this.dataStorageService.saveParty(newParty)
    return newParty

  }


  levelContent(levelCase) {
    return (levelCase ? levelCase.contentArray : []).filter(it => !this.isDoor(it))
  }

  private isDoor(it) {
    return it.destination !== undefined
  }

  doorAt(levelCase, direction: string) {
    let destination = levelCase.connectionsMap ? levelCase.connectionsMap[direction] : undefined
    if (destination) {
      return levelCase.contentArray.filter(it => it.destination && it.destination.x === destination.x && it.destination.y === destination.y)[0]
    }
  }


}