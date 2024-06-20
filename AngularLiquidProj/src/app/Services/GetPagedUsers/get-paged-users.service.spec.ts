import { TestBed } from '@angular/core/testing';

import { GetPagedUsersService } from './get-paged-users.service';

describe('GetPagedUsersService', () => {
  let service: GetPagedUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPagedUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
