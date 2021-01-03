import {GenerateLabService} from './generate-lab.service';
import {Location} from "@angular/common";
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";
import {Routes} from "@angular/router";
import {NewLabyrinthFormComponent} from "../new-form/new-labyrinth-form.component";
import {LabyrinthGameComponent} from "../game-view/labyrinth-game.component";
import {SoundService} from "./sound/sound.service";

describe('ServiceLabService', () => {
  let location: Location;
  let router: Router;
  let service: GenerateLabService;

  beforeEach(() => {
    TestBed.configureTestingModule({

      imports: [],
      declarations: [],
      providers: [
        {provide: Router, useValue: {}},
        {provide: SoundService, useValue: {generateGameMusic: jest.fn()}},
      ]
    }).compileComponents();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    service = TestBed.inject(GenerateLabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
