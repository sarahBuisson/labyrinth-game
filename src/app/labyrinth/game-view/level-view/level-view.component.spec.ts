import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LevelViewComponent} from './level-view.component';
import {AsciiModule} from "../../../utils/ascii/ascii.module";
import {ZoneViewComponent} from "./zone-view/zone-view.component";
import {Router} from "@angular/router";
import {SoundService} from "../../service/sound/sound.service";
import {GameplayLabService} from "../../service/gameplay-lab.service";
import {FullsizeAsciiRenderService} from "../../service/render/fullsize-ascii-render.service";
// @ts-ignore
import * as gameRules from 'gameRules';
import {parseKotlinToJsView} from "../../../utils/kotlinUtils";

describe('LevelViewComponent', () => {
  let component: LevelViewComponent;
  let fixture: ComponentFixture<LevelViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LevelViewComponent, ZoneViewComponent],
      imports: [AsciiModule],
      providers: [
        {provide: Router, useValue: {}},
        {provide: SoundService, useValue: {}},
        {provide: GameplayLabService, useValue: {}},
        {provide: FullsizeAsciiRenderService, useValue: {}},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelViewComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    // @ts-ignore
    let party = gameRules.fr.perso.labyrinth.labeat.generation.initPartieEmpty(3);
    component.currentParty=parseKotlinToJsView(party)
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
