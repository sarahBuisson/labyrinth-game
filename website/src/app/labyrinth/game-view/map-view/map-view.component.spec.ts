import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MapViewComponent} from './map-view.component';
import {AsciiModule} from "../../../utils/ascii/ascii.module";
import {GameplayLabService} from "../../service/gameplay-lab.service";
import * as gameRules from 'gameRules'
import {parseKotlinToJsView} from "../../../utils/kotlinUtils";

describe('MapViewComponent', () => {
  let component: MapViewComponent;
  let fixture: ComponentFixture<MapViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapViewComponent],
      imports: [AsciiModule],
      providers: [
        {
          provide: GameplayLabService, useValue: {
            doorAt: jest.fn(),
            levelContent: jest.fn().mockReturnValue([])
          }
        }
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(MapViewComponent);
    component = fixture.componentInstance;
    // @ts-ignore
    component.currentPartieProxy = gameRules.fr.perso.labyrinth.labeat.generation.initPartieEmpty(3)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
