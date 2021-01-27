import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {GameplayLabService} from "../../service/gameplay-lab.service";
import {DataStorageService} from "../../service/data-storage.service";

@Component({
  selector: 'keypad-form',
  templateUrl: './keypad-form.component.html',
  styleUrls: ['./keypad-form.component.css']
})
export class KeypadFormComponent implements OnInit, OnDestroy {
  message: string = "use keyword to move or click on destination, use enter or click to grab object\n";
  subscription: any;

  constructor(private gameplayLabService: GameplayLabService, private dataService: DataStorageService) {

  }

  ngOnInit(): void {
    this.subscription = this.dataService.lastMessage$.subscribe((m) => {
      this.message = m
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
