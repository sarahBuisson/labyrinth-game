import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsciiDivComponent } from './ascii-div.component';

describe('AsciiButtonComponent', () => {
  let component: AsciiDivComponent;
  let fixture: ComponentFixture<AsciiDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsciiDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsciiDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
