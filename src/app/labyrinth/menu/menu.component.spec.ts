import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MenuComponent} from './menu.component';
import {AsciiModule} from "../../utils/ascii/ascii.module";
import {CharacterFormComponent} from "../../characterEditor/character-form/character-form.component";
import {NewLabyrinthFormComponent} from "../new-form/new-labyrinth-form.component";
import {SoundService} from "../service/sound/sound.service";
import {FormsModule} from "@angular/forms";
import {LoadingComponent} from "../loading/loading.component";
import {ActivatedRoute, Router} from "@angular/router";
import {HighscoresService} from "../service/highscores.service";
import {of} from "rxjs";

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuComponent,
        CharacterFormComponent,
        NewLabyrinthFormComponent,
        LoadingComponent],
      imports: [AsciiModule, FormsModule],
      providers: [{
        provide: SoundService,
        useValue: {
          generateMenuMusic: jest.fn(),
          playMenuMusic: jest.fn()
        }
      },
        {
          provide: HighscoresService,
          useValue: {
            getScores: jest.fn().mockReturnValue(of())
          }
        },
        {provide: ActivatedRoute, useValue: {queryParams: of(5)}},
        {provide: Router, useValue: {}}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
