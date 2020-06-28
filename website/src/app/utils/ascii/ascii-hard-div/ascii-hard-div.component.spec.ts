import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsciiHardDivComponent } from './ascii-hard-div.component';

describe('AsciiButtonComponent', () => {
  let component: AsciiHardDivComponent;
  let fixture: ComponentFixture<AsciiHardDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsciiHardDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsciiHardDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
