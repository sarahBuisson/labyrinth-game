import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from "@angular/forms";
import {NgZone} from "@angular/core";

import {CharacterFormComponent} from './character-form.component';
import {CharacterRenderData, CharacterRenderService} from "../../labyrinth/service/render/character-render.service";
import {DataStorageService} from "../../labyrinth/service/data-storage.service";
import {AsciiModule} from "../../utils/ascii/ascii.module";
import any = jasmine.any;
import {CommonModule} from "@angular/common";


describe('CharacterFormComponent', async () => {
  let component: CharacterFormComponent;
  let fixture: ComponentFixture<CharacterFormComponent>;
  let mockCharacterRenderService;
  let mockNgZone;
  let mockDataStorage;

  beforeEach(() => {

    mockCharacterRenderService = {
      render: jest.fn()
    };

    mockNgZone = {
      runOutsideAngular: (callback) => {
        callback();
      }
    };

    mockDataStorage = {
      runOutsideAngular: (callback) => {
        callback();
      },
      saveCharacter: jest.fn()
    };

    TestBed.configureTestingModule({
      imports: [FormsModule, AsciiModule],
      declarations: [CharacterFormComponent],
      providers: [
        {provide: CharacterRenderService, useValue: mockCharacterRenderService},
        {provide: DataStorageService, useValue: mockDataStorage}
        //{provide: NgZone, useValue: {}} //DO NOT PROVIDE NGZONE !

      ]
    }).compileComponents();
    fixture = TestBed.createComponent(CharacterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).not.toBeUndefined();
  });

  it('should compute next rotation', () => {

    //When
    component.rotate(1)();

    //Then
    expect(mockCharacterRenderService.render).toHaveBeenCalledWith(any(CharacterRenderData), 'RIGHT')

  });

  it('should update when input change', () => {

    //When
    component.update();

    //Then
    expect(mockDataStorage.saveCharacter).toHaveBeenCalledWith(any(CharacterRenderData))

  });
});
