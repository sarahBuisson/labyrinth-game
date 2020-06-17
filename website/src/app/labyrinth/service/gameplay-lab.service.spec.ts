import { TestBed } from '@angular/core/testing';

import { GameplayLabService } from './gameplay-lab.service';

describe('GameplayLabService', () => {
  let service: GameplayLabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameplayLabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
