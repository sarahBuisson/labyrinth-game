import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NgZone} from "@angular/core";
import {CharacterFormComponent} from './character-form.component';
import {CharacterRenderService} from "../../labyrinth/service/render/character-render.service";

import {DataStorageService} from "../../labyrinth/service/data-storage.service";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import {CommonModule} from "@angular/common";
import {AppModule} from "../../app.module";


describe('CharacterFormComponent', async () => {
  let component: CharacterFormComponent;
  let fixture: ComponentFixture<CharacterFormComponent>;
  let mockCharacterRenderService;
  let mockNgZone;
  let mockDataStorage;

  beforeEach((async (callbackBeforeEach) => {

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
      }
    };

    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [CharacterFormComponent],
      providers: [
        CharacterRenderService,
        DataStorageService,
        NgZone

       ]
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    callbackBeforeEach();
  }));

  beforeEach(() => {

  });

  it('should create', () => {
    expect(component).not.toBeUndefined();
  });

  it('should compute next rotation', () => {

    //When
    component.rotate(1);

    //Then
    //    expect(mockCharacterRenderService.render).toHaveBeenCalledWith(expect.any(CharacterRenderData), 'LEFT')

  });

  it('should update when input change', () => {

    //When
    component;

    //Then
//     expect(mockCharacterRenderService.render).toHaveBeenCalledWith(expect.any(CharacterRenderData), 'LEFT')

  });
});
