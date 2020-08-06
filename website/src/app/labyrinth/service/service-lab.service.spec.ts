
import { GenerateLabService } from './generate-lab.service';
import {Location} from "@angular/common";
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";
import { Routes } from "@angular/router";
import {NewLabyrinthFormComponent} from "../new-form/new-labyrinth-form.component";
import {LabyrinthGameComponent} from "../game-view/labyrinth-game.component";

describe('ServiceLabService', () => {
  let location: Location;
  let router: Router;
  let service: GenerateLabService;

  beforeEach(() => {
     const routes: Routes = [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'labForm', component: NewLabyrinthFormComponent },
      { path: 'labGame', component: LabyrinthGameComponent }
    ];
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
    declarations: [
    ]
  }).compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    service = TestBed.get(GenerateLabService);
    router.initialNavigation();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
