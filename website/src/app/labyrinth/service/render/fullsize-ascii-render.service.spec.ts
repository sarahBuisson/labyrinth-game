import { TestBed } from '@angular/core/testing';

import { FullsizeAsciiRenderService } from './fullsize-ascii-render.service';

describe('AsciiRenderFullsizeService', () => {
  let service: FullsizeAsciiRenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullsizeAsciiRenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
