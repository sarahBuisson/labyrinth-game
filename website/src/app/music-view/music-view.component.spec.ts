import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicViewComponent } from './music-view.component';
import {GameMusiqueService} from "../labyrinth/service/sound/game-musique.service";
import {SoundService} from "../labyrinth/service/sound/sound.service";

describe('MusicViewComponent', () => {
  let component: MusicViewComponent;
  let fixture: ComponentFixture<MusicViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicViewComponent],
      providers: [
        GameMusiqueService,
        SoundService,
        GameMusiqueService]
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
