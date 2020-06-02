import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabyrinthFormComponent } from './labyrinth-form.component';

describe('LabyrinthFormComponent', () => {
  let component: LabyrinthFormComponent;
  let fixture: ComponentFixture<LabyrinthFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabyrinthFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabyrinthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
