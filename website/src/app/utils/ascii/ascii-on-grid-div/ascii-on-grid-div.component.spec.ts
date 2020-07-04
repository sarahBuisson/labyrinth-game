import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsciiOnGridDivComponent } from './ascii-on-grid-div.component';

describe('AsciiOnGridDivComponent', () => {
  let component: AsciiOnGridDivComponent;
  let fixture: ComponentFixture<AsciiOnGridDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsciiOnGridDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsciiOnGridDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
