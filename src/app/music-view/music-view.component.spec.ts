import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MusicViewComponent} from './music-view.component';
import {GameMusiqueService} from "../labyrinth/service/sound/game-musique.service";
import {SoundService} from "../labyrinth/service/sound/sound.service";
import {TempViewComponent} from "./partition-view/temp-view/temp-view.component";
import {PartitionViewComponent} from "./partition-view/partition-view.component";
import {ToneService} from "../labyrinth/service/sound/tone.service";

describe('MusicViewComponent', () => {
  let component: MusicViewComponent;
  let fixture: ComponentFixture<MusicViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicViewComponent,
        TempViewComponent,
        PartitionViewComponent],
      providers: [
        GameMusiqueService,
        {provide: SoundService, useValue: {}},
        {provide: ToneService, useValue: {Synth: jest.fn()}},
        GameMusiqueService,

      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
