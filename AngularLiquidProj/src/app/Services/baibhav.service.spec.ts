import { TestBed } from '@angular/core/testing';

import { BaibhavService } from './baibhav.service';

describe('BaibhavService', () => {
  let service: BaibhavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaibhavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
