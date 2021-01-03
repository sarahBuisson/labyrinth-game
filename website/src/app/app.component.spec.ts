import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {SoundComponent} from "./utils/ui/atom/sound/sound.component";
import {AsciiComponent} from "./utils/ascii/component/ascii.component";
import {ToneService} from "./labyrinth/service/sound/tone.service";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        SoundComponent,
        AsciiComponent
      ],
      providers: [{
        provide: ToneService,
        useValue: {Synth: jest.fn().mockReturnValue({toDestination: jest.fn(), volume:{value:0}})}
      }]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'website-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('website-angular');
  });
});
