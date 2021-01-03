import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SoundComponent} from './sound.component';
import {AsciiModule} from "../../../ascii/ascii.module";
import {SoundService} from "../../../../labyrinth/service/sound/sound.service";
import {of} from "rxjs";

describe('SoundComponent', () => {
  let component: SoundComponent;
  let fixture: ComponentFixture<SoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SoundComponent],
      imports: [AsciiModule],
      providers: [{provide: SoundService,
        useValue: {subscribeSoundOn: jest.fn().mockReturnValue(of({}))}}

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
