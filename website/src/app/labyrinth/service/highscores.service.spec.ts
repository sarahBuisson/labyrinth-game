import {TestBed} from '@angular/core/testing';

import {HighscoresService} from './highscores.service';
import {HttpClient} from "@angular/common/http";

describe('HighscoresService', () => {
  let service: HighscoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [{provide: HttpClient, useValue: {}}]});
    service = TestBed.inject(HighscoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
