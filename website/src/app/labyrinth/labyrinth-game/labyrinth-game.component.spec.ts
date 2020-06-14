import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LabyrinthGameComponent} from './labyrinth-game.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ServiceLabService} from "../service/service-lab.service";
import {Router, Routes} from "@angular/router";
import {LabyrinthFormComponent} from "../labyrinth-form/labyrinth-form.component";
import {Location} from "@angular/common";

describe('LabyrinthGameComponent', () => {
  let component: LabyrinthGameComponent;
  let fixture: ComponentFixture<LabyrinthGameComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    const routes: Routes = [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'labForm', component: LabyrinthFormComponent},
      {path: 'labGame', component: LabyrinthGameComponent}
    ];
    TestBed.configureTestingModule({
      declarations: [LabyrinthGameComponent],
      imports: [RouterTestingModule.withRoutes(routes)],
    })
      .compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(LabyrinthGameComponent);
    component = fixture.componentInstance;
    component.currentParty={}
    component.currentLevel={}
    fixture.detectChanges();
    router.initialNavigation();
  }));

  beforeEach(() => {

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
