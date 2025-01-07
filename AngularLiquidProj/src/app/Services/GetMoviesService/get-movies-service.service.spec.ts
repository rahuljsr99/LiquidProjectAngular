import { TestBed } from '@angular/core/testing';

import { GetMoviesService } from './get-movies-service.service';

describe('GetMoviesServiceService', () => {
  let service: GetMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
