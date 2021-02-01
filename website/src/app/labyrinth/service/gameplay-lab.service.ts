import {Injectable, OnDestroy} from '@angular/core';
import {GenerateLabService} from "./generate-lab.service";
import {getFromKotlin, parseKotlinPathToJsView, parseKotlinToJsView} from "../../utils/kotlinUtils";
import * as gameRules from "gameRules";
import {DataStorageService} from "./data-storage.service";
import findKey from 'lodash/findKey';
import {SoundService} from "./sound/sound.service";
import {Subscription} from "rxjs";

// @ts-ignore

@Injectable({
  providedIn: 'root'
})
export class GameplayLabService implements OnDestroy{
  currentParty: any;
  currentPartyProxy: any;
  gameplay: any;
  private subscriptions: Subscription;
  constructor(private serviceLabService: GenerateLabService, private dataStorageService: DataStorageService,
              private soundService: SoundService) {
    this.subscriptions=dataStorageService
      .getCurrentParty()
      .subscribe((party) => {
        this.currentParty = party;
        this.currentPartyProxy = parseKotlinToJsView(party,7);
      })
    this.gameplay = gameRules.fr.perso.labyrinth.labeat

  }

  ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

  move(direction: string) {
    this.dataStorageService.saveCharacterDirection(direction);
    let connections = this.currentPartyProxy.player.location.connections
    let nextLocation = connections[direction];
    if (nextLocation) {
      let door = this.currentParty.player.location.content.toArray()
        .find(it => {
          let proxy = parseKotlinToJsView(it, 2)
          return proxy.destination
          && it.destination.x === nextLocation.x
          && it.destination.y === nextLocation.y})
      if (door) {
        let interaction = this.play(door);
        if (interaction.result=="Success") {
          this.soundService.playMove()
          return false;
        } else {
          this.soundService.playNo()
          return true;
        }

      }

    }
  }

  take(objToTake) {
    this.dataStorageService.saveCharacterDirection('LEFT');
    this.currentParty.player.location.content.toArray()//getJsViewFromKotlin(this.currentParty, "player", "location", "content")
      .filter(it => it.name === objToTake.name)
      .forEach((it) => {
        if(this.play(it).result == "Success"){
          this.soundService.playTake()}

      })

  }

  takeAll() {
    this.currentParty.player.location.content.toArray()
      .filter(it => it.type != "door")
      .forEach((it) => {
        this.take(it)
      })
  }

  private play(obj): any {
    let interactionResult = this.gameplay.playerInteractWith(this.currentParty, obj);
    this.dataStorageService.saveParty(this.currentParty)
    this.dataStorageService.saveLastMessages(parseKotlinPathToJsView(interactionResult, "messages"))
    return interactionResult;

  }


  levelContent(levelCase) {
    return levelCase.content.filter(it => !this.isDoor(it))
  }

  private isDoor(it) {
    return it.destination !== undefined
  }

  doorAt(levelCase, direction: string): any | undefined {
    let destination = levelCase.connections[direction]
    if (destination) {
      return levelCase.content
        .filter(obj => {
          let doorDestination = obj.destination;
          return doorDestination && doorDestination.x === destination.x && doorDestination.y === destination.y;
        })[0]
    }
  }


  moveAtCase(levelCase: any):boolean {
    let connections = this.currentPartyProxy.player.location.connections
    let direction = findKey(connections, (it) => {
      return it && it.x === levelCase.x && it.y === levelCase.y
    })
    if (direction) {
      return this.move(direction)
    }
    return false;
  }

  hasPlayer(levelCase: any) {
    return levelCase.content
      .find(p => {
        return p.type === "player"
      });
  }

  computePartieScore() {
    return this.gameplay.computePartieScore(this.currentParty)
  }
}
