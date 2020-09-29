import {Component, OnDestroy, OnInit} from '@angular/core';
import {CharacterRenderService, CharacterRenderData} from "../character-render.service";
import {GenerateLabService} from "../../labyrinth/service/generate-lab.service";
import {DataStorageService} from "../../labyrinth/service/data-storage.service";



@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent implements OnInit, OnDestroy {


  data: CharacterRenderData = new CharacterRenderData()

  render: String = ""
  private interval:any;
  private time: number = 0;
  private direction: string;


  constructor(public renderService: CharacterRenderService,
              private dataStorage: DataStorageService) {

  }

  update() {
    this.render = this.renderService.render(this.data, this.direction)
  }


  ngOnInit(): void {
    this.update()
    this.dataStorage.saveCharacter(this.data)

    this.interval = setInterval(() => {
      this.time = (this.time + 1) % 4;
      switch (this.time) {
        case 0:
          this.direction = 'LEFT';
          break;
        case 1:
          this.direction = 'BOTTOM';
          break;
        case 2:
          this.direction = 'RIGHT';
          break;
        case 3:
          this.direction = 'TOP';
          break;
      }
      this.render = this.renderService.render(this.data, this.direction);
    }, 1000)
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
