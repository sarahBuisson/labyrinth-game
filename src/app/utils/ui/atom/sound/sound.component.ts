import {Component, OnDestroy, OnInit} from '@angular/core';
import {SoundService} from "../../../../labyrinth/service/sound/sound.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'ui-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.css']
})
export class SoundComponent implements OnInit, OnDestroy {
  soundOn: boolean;
  soundSubscription: Subscription;
  on = '' +
    '           __ \n' +
    ' ((\'c\') < d d \n';
  //≮
  off = '' +
    '            _ \n' +
    ' ((\'x\') ° (d) \n';

  constructor(private soundService: SoundService) {

    this.soundService.subscribeSoundOn((data) => {

      this.soundOn = data;
    })
  }

  ngOnInit(): void {


  }

  ngOnDestroy(): void {
    this.soundSubscription.unsubscribe();
  }

  toogle() {
    this.soundService.toogleSound();
  }
}
