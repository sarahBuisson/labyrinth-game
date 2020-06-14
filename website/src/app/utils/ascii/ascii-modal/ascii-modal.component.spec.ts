import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsciiModalComponent } from './ascii-modal.component';

describe('AsciiModalComponent', () => {
  let component: AsciiModalComponent;
  let fixture: ComponentFixture<AsciiModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsciiModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsciiModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
