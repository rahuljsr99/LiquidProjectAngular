import { TestBed } from '@angular/core/testing';

import { GetAllGenresService } from './get-all-genres.service';

describe('GetAllGenresService', () => {
  let service: GetAllGenresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllGenresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
