import {Component, OnInit} from '@angular/core';
import {
  abcGridTemplate,
  mapGridTemplate, paperGridTemplate,
  viewEmptyZoneGridTemplates
} from "../labyrinth/service/render/resources/border";
import * as gameRules from "gameRules"
@Component({
  selector: 'app-ascii-gallery',
  templateUrl: './ascii-gallery.component.html',
  styleUrls: ['./ascii-gallery.component.css']
})
export class AsciiGalleryComponent implements OnInit {
  emptyZone: any
  defaultZone: any
  display = false
  abc: any = abcGridTemplate;
  outsideZone: any = viewEmptyZoneGridTemplates[0];
  parchemin: any = paperGridTemplate;

  constructor() {
  }

  ngOnInit(): void {
    console.log("ngOnInit")
    try {
      let emptyParty = gameRules.fr.perso.labyrinth.labeat.generation.initPartieEmpty(3, "empty");
      this.emptyZone = emptyParty.level.content.toArray()[0].toArray()[0]
      this.defaultZone = emptyParty.level.content.toArray()[1].toArray()[1]
      this.defaultZone = gameRules.fr.perso.labyrinth.labeat.generation.initPartieMapLabWithKey(4, "key").level.content.toArray()[0].toArray()[1]
    } catch (e) {
      console.log(e)
    }
    console.log(this.emptyZone)
    console.log(this.defaultZone)
  }

  toggle(): void {
    this.display = !this.display;
  }
}
