import { TestBed } from '@angular/core/testing';

import { CharacterRenderService } from './character-render.service';

describe('RenderService', () => {
  let service: CharacterRenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterRenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
