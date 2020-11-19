import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CharacterFormComponent } from './character-form.component';
import {CharacterRenderData, CharacterRenderService} from "../../labyrinth/service/render/character-render.service";
import {NgZone} from "@angular/core";
import {DataStorageService} from "../../labyrinth/service/data-storage.service";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import {CommonModule} from "@angular/common";
import {AppModule} from "../../app.module";

describe('CharacterFormComponent', async() => {
  let component: CharacterFormComponent;
  let fixture: ComponentFixture<CharacterFormComponent>;
  let mockCharacterRenderService;
  let mockNgZone;
  let mockDataStorage;

  beforeEach((() => {

    mockCharacterRenderService = ({
      render: jest.fn()
    }) as {} as CharacterRenderService;

    mockNgZone = ({
      runOutsideAngular: (callback) => {
        callback();
      }
    }) as {} as NgZone;

    mockDataStorage = ({
      runOutsideAngular: (callback) => {
        callback();
      }
    }) as {} as DataStorageService;

    TestBed.configureTestingModule({
      imports: [BrowserDynamicTestingModule, CommonModule, AppModule],
      declarations: [CharacterFormComponent],
      providers: [
        {provide: CharacterRenderService, value: mockCharacterRenderService},
        {provide: DataStorageService, value: mockDataStorage},
        {provide: NgZone, value: mockNgZone}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compute next rotation', () => {

    //When
    component.rotate(1);

    //Then
    //  expect(mockCharacterRenderService.render).toHaveBeenCalledWith(expect.any(CharacterRenderData), 'LEFT')

  });

  it('should update when input change', () => {

    //When
    component;

    //Then
    // expect(mockCharacterRenderService.render).toHaveBeenCalledWith(expect.any(CharacterRenderData), 'LEFT')

  });
});
