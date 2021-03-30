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
export class GameplayLabService implements OnDestroy {
  currentParty: any;
  currentPartyProxy: any;
  gameplay: any;
  private subscriptions: Subscription;

  constructor(private serviceLabService: GenerateLabService, private dataStorageService: DataStorageService,
              private soundService: SoundService) {
    this.gameplay = gameRules.fr.perso.labyrinth.labeat
    this.subscriptions = dataStorageService
      .getCurrentParty()
      .subscribe((party) => {
        this.currentParty = party;
        this.currentPartyProxy = JSON.parse(this.gameplay.toJson(party));
      })

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  move(direction: string) {
    this.dataStorageService.saveCharacterDirection(direction);
    let interactionResult = this.gameplay.playerInteractWithJson(this.currentParty, direction);
    this.dataStorageService.saveParty(this.currentParty)
    this.dataStorageService.saveLastMessages(JSON.parse(this.gameplay.toJsonInteraction(interactionResult)).messages)

    if (interactionResult.result == "Success") {
          this.soundService.playMove()
          return false;
        } else {
          this.soundService.playNo()
          return true;
        }




  }

  take(objToTake) {
    this.dataStorageService.saveCharacterDirection('LEFT');

        if (this.play(objToTake).result == "Success") {
          this.soundService.playTake()
        }


  }

  takeAll() {
    this.currentPartyProxy.player.location.content
      .filter(it => it.type != "door")
      .forEach((it) => {
        this.take(it)
      })
  }

  private play(obj): any {
    let interactionResult = this.gameplay.playerInteractWithJson(this.currentParty, JSON.stringify(obj));
    this.dataStorageService.saveParty(this.currentParty)
    this.dataStorageService.saveLastMessages(JSON.parse(this.gameplay.toJsonInteraction(interactionResult)).messages)
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


  moveAtCase(levelCase: any): boolean {
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
