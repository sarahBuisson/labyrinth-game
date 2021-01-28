import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsciiButtonComponent } from './ascii-button.component';

import {AsciiModule} from "../ascii.module";

describe('AsciiButtonComponent', () => {
  let component: AsciiButtonComponent;
  let fixture: ComponentFixture<AsciiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [AsciiModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsciiButtonComponent);
    component = fixture.componentInstance;
   // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
