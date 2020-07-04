import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsciiCharacterComponent } from './ascii-character.component';

describe('AsciiCharacterComponent', () => {
  let component: AsciiCharacterComponent;
  let fixture: ComponentFixture<AsciiCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsciiCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsciiCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
