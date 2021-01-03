import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsciiBorderComponent } from './ascii-border.component';
import {ChangeDetectorRef, ElementRef, NgZone, Renderer2} from "@angular/core";

describe('AsciiButtonComponent', () => {
  let component: AsciiBorderComponent;
  let fixture: ComponentFixture<AsciiBorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AsciiBorderComponent],
      providers: [
        {provide: ChangeDetectorRef, useValue: {}},
        {provide: ElementRef, useValue: {}},
        {provide: Renderer2, useValue: {}}
      ]
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
