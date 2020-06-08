import {Component, OnInit} from '@angular/core';
import {CharacterRenderService, CharacterRenderData} from "../character-render.service";
import {ServiceLabService} from "../../labyrinth/service-lab.service";




@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent implements OnInit {


  data: CharacterRenderData = new CharacterRenderData()

  render: String = ""

  constructor(public renderService: CharacterRenderService,
              private serviceLab:ServiceLabService) {

  }

  update() {
    this.render = this.renderService.render(this.data)
  }


  ngOnInit(): void {
    this.update()
    this.serviceLab.saveCharacter(this.data)
  }

}
