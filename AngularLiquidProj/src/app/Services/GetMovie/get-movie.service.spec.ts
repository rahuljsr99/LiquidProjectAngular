import { TestBed } from '@angular/core/testing';

import { GetMovieService } from './get-movie.service';

describe('GetMovieService', () => {
  let service: GetMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
