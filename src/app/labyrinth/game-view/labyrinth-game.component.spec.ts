import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LabyrinthGameComponent} from './labyrinth-game.component';
import {RouterTestingModule} from "@angular/router/testing";
import {GenerateLabService} from "../service/generate-lab.service";
import {Router, Routes} from "@angular/router";
import {NewLabyrinthFormComponent} from "../new-form/new-labyrinth-form.component";
import {Location} from "@angular/common";
import {DataStorageService} from "../service/data-storage.service";
import {GameplayLabService} from "../service/gameplay-lab.service";
import {FullsizeAsciiRenderService} from "../service/render/fullsize-ascii-render.service";
import {MapAsciiRenderService} from "../service/render/map-ascii-render.service";
import {SoundService} from "../service/sound/sound.service";
import {LevelViewComponent} from "./level-view/level-view.component";
import {SlidingComponent} from "../../utils/ui/atom/sliding/sliding.component";
import {MapViewComponent} from "./map-view/map-view.component";
import {InventoryViewComponent} from "./inventory-view/inventory-view.component";
import {KeypadFormComponent} from "./keypad-form/keypad-form.component";
import {AsciiModule} from "../../utils/ascii/ascii.module";
import {LoadingComponent} from "../loading/loading.component";
import {CharacterFormComponent} from "../../characterEditor/character-form/character-form.component";
import {FormsModule} from "@angular/forms";
import {ZoneViewComponent} from "./level-view/zone-view/zone-view.component";
import {of} from "rxjs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
// @ts-ignore
import * as gameRules from 'gameRules';

let labeatGeneration = gameRules.fr.perso.labyrinth.labeat.generation;

describe('LabyrinthGameComponent', () => {
  let component: LabyrinthGameComponent;
  let fixture: ComponentFixture<LabyrinthGameComponent>;
  let location: Location;
  let router: Router;
  let dataStorageMock;
  beforeEach(() => {
    const routes: Routes = [];
    dataStorageMock = {
      getCurrentParty: jest.fn()
    };
    TestBed.configureTestingModule({
      declarations: [LabyrinthGameComponent,
        NewLabyrinthFormComponent,
        LevelViewComponent,
        SlidingComponent,
        MapViewComponent,
        InventoryViewComponent,
        KeypadFormComponent,
        LoadingComponent,
        CharacterFormComponent,
        NewLabyrinthFormComponent,
        ZoneViewComponent],
      imports: [
        RouterTestingModule.withRoutes(routes),
        AsciiModule,
        FormsModule,
        BrowserAnimationsModule
      ],
      providers: [
        {provide: GenerateLabService, useValue: {}},
        {provide: DataStorageService, useValue: dataStorageMock},
        {provide: GameplayLabService, useValue: {}},
        {provide: FullsizeAsciiRenderService, useValue: {}},
        {provide: MapAsciiRenderService, useValue: {}},
        {provide: Router, useValue: {}},
        {
          provide: SoundService,
          useValue: {playGameMusic: jest.fn()}
        },

      ]
    })
      .compileComponents();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  beforeEach(() => {

  });

  it('should create', () => {
    console.log(labeatGeneration)
    // @ts-ignore
    let party = labeatGeneration.initPartieEmpty(3);
    dataStorageMock.getCurrentParty.mockReturnValue(of(party));
    fixture = TestBed.createComponent(LabyrinthGameComponent);
    component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });


});
