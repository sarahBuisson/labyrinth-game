import { TestBed } from '@angular/core/testing';

import { AsciiDecorService } from './ascii-decor.service';

describe('AsciiDecorService', () => {
  let service: AsciiDecorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsciiDecorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
