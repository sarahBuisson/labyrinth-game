import {TestBed} from '@angular/core/testing';

import {SoundService} from './sound.service';
import {ToneService} from "./tone.service";
import {GameMusiqueService} from "./game-musique.service";

describe('SoundServiceService', () => {
  let service: SoundService;
  let toneServiceMock: ToneService;
  let gameMusiqueServiceMock: GameMusiqueService;

  beforeEach(() => {
    toneServiceMock = {
      Synth: jest.fn().mockReturnValue({
        toDestination: jest.fn(),
        volume: {value: 0}
      })
    } as {} as ToneService
    gameMusiqueServiceMock = {
      takeMusic: jest.fn(),
      moveMusic: jest.fn(),
      noMusic: jest.fn()
    } as {} as GameMusiqueService
    service = new SoundService(gameMusiqueServiceMock, toneServiceMock)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
