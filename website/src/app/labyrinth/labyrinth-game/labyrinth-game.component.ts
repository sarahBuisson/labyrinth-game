import {Component, OnInit} from '@angular/core';
import {ServiceLabService} from "../service-lab.service";
import {kotlinProxyToJsView} from "../../utils/util";

// @ts-ignore
import gameRules from 'gameRules';

@Component({
  selector: 'app-labyrinth-game',
  templateUrl: './labyrinth-game.component.html',
  styleUrls: ['./labyrinth-game.component.css']
})
export class LabyrinthGameComponent implements OnInit {
  currentParty: any
  currentLevel: any
  currentLevelProxy: any
  map: any

  constructor(private labService: ServiceLabService) {
  }

  ngOnInit(): void {
    this.getCurrentParty()
  }

  log(data): void {
    console.log(data)
  }

  getCurrentParty(): any {

    this.labService.getCurrentParty().subscribe((c) => {
        this.currentParty = kotlinProxyToJsView(c, 0)
        console.log(this.currentParty)
        if (this.currentParty) {
          this.currentLevel = this.currentParty.level
          this.currentLevelProxy = kotlinProxyToJsView(this.currentParty.level,6)
          this.map = (kotlinProxyToJsView(gameRules.fr.perso.labyrinth.board, false).labyrinthTreeToStringFunction(this.currentParty.level))

        }
      }
    )
    return this.currentParty
  }

}
