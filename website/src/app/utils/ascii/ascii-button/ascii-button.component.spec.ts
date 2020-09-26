import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsciiButtonComponent } from './ascii-button.component';

describe('AsciiButtonComponent', () => {
  let component: AsciiButtonComponent;
  let fixture: ComponentFixture<AsciiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsciiButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsciiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
