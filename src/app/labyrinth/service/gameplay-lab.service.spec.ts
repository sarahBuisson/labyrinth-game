import {TestBed} from '@angular/core/testing';

import {GameplayLabService} from './gameplay-lab.service';
import {GenerateLabService} from "./generate-lab.service";
import {Location} from "@angular/common";
import {Router, Routes} from "@angular/router";
import {NewLabyrinthFormComponent} from "../new-form/new-labyrinth-form.component";
import {LabyrinthGameComponent} from "../game-view/labyrinth-game.component";
import {RouterTestingModule} from "@angular/router/testing";
import {SoundService} from "./sound/sound.service";

describe('GameplayLabService', () => {
  let service: GameplayLabService;
  let serviceGenerate: GenerateLabService;
  let location: Location;
  let router: Router;

  beforeEach(() => {
    const routes: Routes = [];
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [],
      providers: [
        {
          provide: SoundService, useValue: {
            generateGameMusic: jest.fn(),
            playTake: jest.fn(),
            playNo: jest.fn(),
            playMove: jest.fn()
          }
        }
      ]
    }).compileComponents();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    serviceGenerate = TestBed.inject(GenerateLabService);
    service = TestBed.inject(GameplayLabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should play', () => {
    //given
    let partie = serviceGenerate.generate(5, "somePlayer")
    //when
    service.takeAll()
    service.move("RIGHT")
  });
});
