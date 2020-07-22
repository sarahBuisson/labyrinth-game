import {Component, HostListener, OnInit} from '@angular/core';
import {GameplayLabService} from "../../service/gameplay-lab.service";

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {

  constructor(private gameplayLabService: GameplayLabService) {
  }

  ngOnInit(): void {
  }

  @HostListener('document:keydown', ['$event'])
  move(direction: string) {
    this.gameplayLabService.move(direction);
  }

  @HostListener('document:keydown', ['$event'])
  handleKey(event: KeyboardEvent) {
    console.log(event.key)
    if (event.key === 'Enter') {
      this.gameplayLabService.takeAll();
    }
    if (event.key === 'ArrowUp') {
      this.gameplayLabService.move('UP');
    }
    if (event.key === 'ArrowDown') {
      this.gameplayLabService.move('DOWN');
    }
    if (event.key === 'ArrowLeft') {
      this.gameplayLabService.move('LEFT');
    }
    if (event.key === 'ArrowRight') {
      this.gameplayLabService.move('RIGHT');
    }

  }
}
