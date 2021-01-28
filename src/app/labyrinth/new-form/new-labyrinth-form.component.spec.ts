import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewLabyrinthFormComponent} from './new-labyrinth-form.component';
import {Router, Routes} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {Location} from "@angular/common";
import {CharacterFormComponent} from "../../characterEditor/character-form/character-form.component";
import {GameplayLabService} from "../service/gameplay-lab.service";
import {FormsModule} from "@angular/forms";
import {AsciiModule} from "../../utils/ascii/ascii.module";
import {LoadingComponent} from "../loading/loading.component";
import {SoundService} from "../service/sound/sound.service";
import {GenerateLabService} from "../service/generate-lab.service";

describe('LabyrinthFormComponent', () => {
  let component: NewLabyrinthFormComponent;
  let fixture: ComponentFixture<NewLabyrinthFormComponent>;
  let router: Router;
  let location: Location;

  beforeEach(() => {
    const routes: Routes = [];
    TestBed.configureTestingModule({
      declarations: [
        NewLabyrinthFormComponent,
        CharacterFormComponent,
        LoadingComponent],
      imports: [
        RouterTestingModule.withRoutes(routes),
        FormsModule,
        AsciiModule],
      providers: [{
        provide: GameplayLabService,
        useValue: {hasPlayer: jest.fn()}
      },
        {
          provide: GenerateLabService,
          useValue: {generate: jest.fn()}
        },
        {
          provide: SoundService,
          useValue: {}
        }]
    })
      .compileComponents();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(NewLabyrinthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
