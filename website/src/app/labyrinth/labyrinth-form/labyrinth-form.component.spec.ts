import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabyrinthFormComponent } from './labyrinth-form.component';
import {Router, Routes} from "@angular/router";
import {LabyrinthGameComponent} from "../labyrinth-game/labyrinth-game.component";
import {RouterTestingModule} from "@angular/router/testing";
import {Location} from "@angular/common";

describe('LabyrinthFormComponent', () => {
  let component: LabyrinthFormComponent;
  let fixture: ComponentFixture<LabyrinthFormComponent>;
  let router: Router;

  beforeEach(async(() => {
    const routes: Routes = [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'labForm', component: LabyrinthFormComponent},
      {path: 'labGame', component: LabyrinthGameComponent}
    ];
    TestBed.configureTestingModule({
      declarations: [LabyrinthFormComponent],
      imports: [RouterTestingModule.withRoutes(routes)],
    })
      .compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(LabyrinthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router.initialNavigation();
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
