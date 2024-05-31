import { TestBed } from '@angular/core/testing';

import { AddUserServiceService } from './add-user-service.service';

describe('AddUserServiceService', () => {
  let service: AddUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
