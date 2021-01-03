import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryViewComponent } from './inventory-view.component';
import {AsciiBorderComponent} from "../../../utils/ascii/ascii-border/ascii-border.component";
import {AsciiModule} from "../../../utils/ascii/ascii.module";
import * as gameRules from 'gameRules'

describe('InventoryComponent', () => {
  let component: InventoryViewComponent;
  let fixture: ComponentFixture<InventoryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryViewComponent],
      imports: [AsciiModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryViewComponent);
    component = fixture.componentInstance;
    // @ts-ignore
    component.player = new gameRules.fr.perso.labyrinth.labeat.generation.initPartieEmpty(3).player
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });
});
