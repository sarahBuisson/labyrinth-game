import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempViewComponent } from './temp-view.component';

describe('TempViewComponent', () => {
  let component: TempViewComponent;
  let fixture: ComponentFixture<TempViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TempViewComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(TempViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
