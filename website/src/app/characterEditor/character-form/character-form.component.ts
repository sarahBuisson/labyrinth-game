import {Component, OnInit} from '@angular/core';
import {RenderService, CharacterData} from "../render.service";


@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent implements OnInit {


  data: CharacterData = Object.assign(new CharacterData(), {
    eye: "'",
    hair: "(",
    torso: "M",
    hat: "_--_",
    leg: "d"
  })

  render: String = ""

  constructor(public  renderService: RenderService) {

  }

  update() {
    this.render = this.renderService.render(this.data)
  }


  ngOnInit(): void {
    this.update()
  }

}
