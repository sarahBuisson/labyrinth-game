import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {KeypadFormComponent} from './keypad-form.component';
import {GameplayLabService} from "../../service/gameplay-lab.service";

describe('KeypadComponent', () => {
  let component: KeypadFormComponent;
  let fixture: ComponentFixture<KeypadFormComponent>;
  let mockGameplayLabService
  beforeEach(async(() => {
    mockGameplayLabService = {}
    TestBed.configureTestingModule({
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
