import { TestBed } from '@angular/core/testing';

import { RevenueService } from './revenue.service';

describe('RevenueServiceService', () => {
  let service: RevenueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevenueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
