import {Component, OnInit} from '@angular/core';
import {CharacterRenderService, CharacterRenderData} from "../character-render.service";
import {GenerateLabService} from "../../labyrinth/service/generate-lab.service";
import {DataStorageService} from "../../labyrinth/service/data-storage.service";




@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent implements OnInit {


  data: CharacterRenderData = new CharacterRenderData()

  render: String = ""

  constructor(public renderService: CharacterRenderService,
              private dataStorage:DataStorageService) {

  }

  update() {
    this.render = this.renderService.render(this.data)
  }


  ngOnInit(): void {
    this.update()
    this.dataStorage.saveCharacter(this.data)
  }

}
