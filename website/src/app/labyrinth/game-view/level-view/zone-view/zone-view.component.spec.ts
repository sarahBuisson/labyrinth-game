import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ZoneViewComponent} from './zone-view.component';
import {AsciiComponent} from "../../../../utils/ascii/component/ascii.component";
import {AsciiModule} from "../../../../utils/ascii/ascii.module";
import {Router} from "@angular/router";
import {GameplayLabService} from "../../../service/gameplay-lab.service";
import {FullsizeAsciiRenderService} from "../../../service/render/fullsize-ascii-render.service";

describe('ZoneViewComponent', () => {
  let component: ZoneViewComponent;
  let fixture: ComponentFixture<ZoneViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZoneViewComponent],
      imports: [AsciiModule],
      providers: [
        {
          provide: GameplayLabService, useValue: {
            doorAt: jest.fn(),
            hasPlayer: jest.fn(),
            levelContent: jest.fn(),
          }
        },
        {provide: FullsizeAsciiRenderService, useValue: {}},
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(ZoneViewComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    component.zone = {}
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
