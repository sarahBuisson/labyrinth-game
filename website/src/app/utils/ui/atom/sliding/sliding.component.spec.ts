import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingComponent } from './sliding.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('SlidingComponent', () => {
  let component: SlidingComponent;
  let fixture: ComponentFixture<SlidingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidingComponent ],
      imports: [BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
