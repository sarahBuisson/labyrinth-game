import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsciiBorderComponent } from './ascii-border.component';

describe('AsciiButtonComponent', () => {
  let component: AsciiBorderComponent;
  let fixture: ComponentFixture<AsciiBorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsciiBorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsciiBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
