import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';
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
              private dataStorage: DataStorageService,
              private _ngZone: NgZone) {

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
    this._ngZone.runOutsideAngular(() => {
      this.interval = setInterval(this.rotate(time), 1000)
    });
  }

  public rotate(time: number) {
    return () => {
      time = (time + 1) % 4;
      let direction: string
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
        default:
          direction = 'LEFT'
      }
      this.render = this.renderService.render(this.data, direction);
    };
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
