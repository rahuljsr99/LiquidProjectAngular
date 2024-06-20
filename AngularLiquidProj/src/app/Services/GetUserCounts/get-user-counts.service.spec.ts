import { TestBed } from '@angular/core/testing';

import { GetUserCountsService } from '../get-user-counts.service';

describe('GetUserCountsService', () => {
  let service: GetUserCountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserCountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
