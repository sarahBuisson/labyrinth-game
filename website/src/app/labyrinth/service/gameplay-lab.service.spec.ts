import { TestBed } from '@angular/core/testing';

import { GameplayLabService } from './gameplay-lab.service';
import {GenerateLabService} from "./generate-lab.service";
import {Location} from "@angular/common";
import {Router, Routes} from "@angular/router";
import {LabyrinthFormComponent} from "../labyrinth-form/labyrinth-form.component";
import {LabyrinthGameComponent} from "../labyrinth-game/labyrinth-game.component";
import {RouterTestingModule} from "@angular/router/testing";

describe('GameplayLabService', () => {
  let service: GameplayLabService;
  let serviceGenerate: GenerateLabService;
  let location: Location;
  let router: Router;

  beforeEach(() => {
    const routes: Routes = [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'labForm', component: LabyrinthFormComponent },
      { path: 'labGame', component: LabyrinthGameComponent }
    ];
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
      ]
    }).compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    serviceGenerate = TestBed.get(GenerateLabService);
    router.initialNavigation();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({});
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
