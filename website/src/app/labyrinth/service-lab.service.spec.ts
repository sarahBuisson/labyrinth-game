import { TestBed } from '@angular/core/testing';

import { ServiceLabService } from './service-lab.service';

describe('ServiceLabService', () => {
  let service: ServiceLabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceLabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
