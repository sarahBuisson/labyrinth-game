import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsciiModalComponent } from './ascii-modal.component';
import {AsciiModule} from "../ascii.module";
import {AsciiBorderComponent} from "../ascii-border/ascii-border.component";

describe('AsciiModalComponent', () => {
  let component: AsciiModalComponent;
  let fixture: ComponentFixture<AsciiModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsciiModalComponent, AsciiBorderComponent ],
      imports:[]
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
