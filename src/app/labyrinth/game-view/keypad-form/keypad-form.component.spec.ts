import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {KeypadFormComponent} from './keypad-form.component';
import {GameplayLabService} from "../../service/gameplay-lab.service";
import {LabyrinthGameModule} from "../labyrinth-game.module";
import {AppModule} from "../../../app.module";
import {AsciiModule} from "../../../utils/ascii/ascii.module";

describe('KeypadComponent', () => {
  let component: KeypadFormComponent;
  let fixture: ComponentFixture<KeypadFormComponent>;
  let mockGameplayLabService
  beforeEach(async(() => {
    mockGameplayLabService = {move: jest.fn()}
    TestBed.configureTestingModule({
      imports: [AsciiModule],
      declarations: [KeypadFormComponent],
      providers: [{provide: GameplayLabService, useValue: mockGameplayLabService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeypadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
