import { TestBed } from '@angular/core/testing';

import { MapAsciiRenderService } from './map-ascii-render.service';

describe('AsciiMapRenderService', () => {
  let service: MapAsciiRenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapAsciiRenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
