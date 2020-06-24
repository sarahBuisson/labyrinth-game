import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoObjectComponent } from './geo-object.component';

describe('GeoObjectComponent', () => {
  let component: GeoObjectComponent;
  let fixture: ComponentFixture<GeoObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
