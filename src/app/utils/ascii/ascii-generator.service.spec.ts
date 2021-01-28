import { TestBed } from '@angular/core/testing';

import { AsciiGeneratorService } from './ascii-generator.service';

describe('AsciiGeneratorService', () => {
  let service: AsciiGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsciiGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
