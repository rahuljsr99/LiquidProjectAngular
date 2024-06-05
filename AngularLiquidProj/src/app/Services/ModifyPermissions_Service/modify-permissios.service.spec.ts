import { TestBed } from '@angular/core/testing';

import { ModifyPermissiosService } from './modify-permissios.service';

describe('ModifyPermissiosService', () => {
  let service: ModifyPermissiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifyPermissiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
