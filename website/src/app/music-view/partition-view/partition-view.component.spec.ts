import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartitionViewComponent } from './partition-view.component';
import {AsciiModule} from "../../utils/ascii/ascii.module";
import {TempViewComponent} from "./temp-view/temp-view.component";

describe('PartitionViewComponent', () => {
  let component: PartitionViewComponent;
  let fixture: ComponentFixture<PartitionViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartitionViewComponent, TempViewComponent],
      imports: [AsciiModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(PartitionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
