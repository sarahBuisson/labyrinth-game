import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from "../../labyrinth/service/data-storage.service";
import {CHARACTER_SPACING} from "../../utils/ascii/AsciiConst";
import {CharacterRenderData, CharacterRenderService} from "../../labyrinth/service/render/character-render.service";



@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css'],
  styles: [`input {
    width: ${CHARACTER_SPACING * 6}px;
    padding: 0;
  }
  `]
})
export class CharacterFormComponent implements OnInit, OnDestroy {


  data: CharacterRenderData = new CharacterRenderData()

  render: String = ""
  private interval:any;


  constructor(public renderService: CharacterRenderService,
              private dataStorage: DataStorageService) {

  }

  update() {
    this.dataStorage.saveCharacter(this.data)
  }


  ngOnInit(): void {
    this.update();
    this.initCharacterRotation();
  }

  private initCharacterRotation() {

    let time: number = 0;
    let direction: string;
    this.interval = setInterval(() => {
      time = (time + 1) % 4;
      switch (time) {
        case 0:
          direction = 'LEFT';
          break;
        case 1:
          direction = 'BOTTOM';
          break;
        case 2:
          direction = 'RIGHT';
          break;
        case 3:
          direction = 'TOP';
          break;
      }
      this.render = this.renderService.render(this.data, direction);
    }, 1000)
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
