import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLabyrinthFormComponent } from './new-labyrinth-form.component';
import {Router, Routes} from "@angular/router";
import {LabyrinthGameComponent} from "../game-view/labyrinth-game.component";
import {RouterTestingModule} from "@angular/router/testing";
import {Location} from "@angular/common";

describe('LabyrinthFormComponent', () => {
  let component: NewLabyrinthFormComponent;
  let fixture: ComponentFixture<NewLabyrinthFormComponent>;
  let router: Router;

  beforeEach(async(() => {
    const routes: Routes = [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'labForm', component: NewLabyrinthFormComponent},
      {path: 'labGame', component: LabyrinthGameComponent}
    ];
    TestBed.configureTestingModule({
      declarations: [NewLabyrinthFormComponent],
      imports: [RouterTestingModule.withRoutes(routes)],
    })
      .compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(NewLabyrinthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router.initialNavigation();
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
