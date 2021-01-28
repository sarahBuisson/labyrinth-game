import { TestBed } from '@angular/core/testing';

import { AsciiRenderService } from './ascii-render.service';

describe('AsciiRenderService', () => {
  let service: AsciiRenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsciiRenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
