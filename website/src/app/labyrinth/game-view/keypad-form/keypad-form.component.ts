import {Component, HostListener, OnInit} from '@angular/core';
import {GameplayLabService} from "../../service/gameplay-lab.service";

@Component({
  selector: 'keypad-form',
  templateUrl: './keypad-form.component.html',
  styleUrls: ['./keypad-form.component.css']
})
export class KeypadFormComponent implements OnInit {

  constructor(private gameplayLabService: GameplayLabService) {
  }

  ngOnInit(): void {
  }

  move(direction: string) {
    this.gameplayLabService.move(direction);
  }

  @HostListener('document:keydown', ['$event'])
  handleKey(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.gameplayLabService.takeAll();
    }
    if (event.key === 'ArrowUp') {
      this.gameplayLabService.move('TOP');
    }
    if (event.key === 'ArrowDown') {
      this.gameplayLabService.move('BOTTOM');
    }
    if (event.key === 'ArrowLeft') {
      this.gameplayLabService.move('LEFT');
    }
    if (event.key === 'ArrowRight') {
      this.gameplayLabService.move('RIGHT');
    }
  }

  take(): void {
    this.gameplayLabService.takeAll();
  }
}
