import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AsciiCharacterComponent} from './ascii-character.component';
import {ChangeDetectorRef} from "@angular/core";
import {AsciiComponent} from "../component/ascii.component";
import {AsciiModule} from "../ascii.module";

describe('AsciiCharacterComponent', () => {
  let component: AsciiCharacterComponent;
  let fixture: ComponentFixture<AsciiCharacterComponent>;
  let changeDetectorRefMock: ChangeDetectorRef
  beforeEach( () => {

    changeDetectorRefMock = ({
      markForCheck: jest.fn(),
    } as {}) as ChangeDetectorRef;
     TestBed.configureTestingModule({
      declarations: [AsciiCharacterComponent, AsciiComponent],
      imports: [],
      providers: [
        {
          provide: ChangeDetectorRef,
          useValue: {
            markForCheck: jest.fn(),
          }
        },
      ],
    }).compileComponents();

    changeDetectorRefMock = TestBed.inject(ChangeDetectorRef);
    fixture = TestBed.createComponent(AsciiCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
