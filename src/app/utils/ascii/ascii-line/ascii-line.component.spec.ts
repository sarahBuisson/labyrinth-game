import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsciiLineComponent } from './ascii-line.component';

describe('AsciiButtonComponent', () => {
  let component: AsciiLineComponent;
  let fixture: ComponentFixture<AsciiLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsciiLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsciiLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
