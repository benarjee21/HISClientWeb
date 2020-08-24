import { TestBed } from '@angular/core/testing';

import { HisOfficersServiceService } from './his-officers-service.service';

describe('HisOfficersServiceService', () => {
  let service: HisOfficersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HisOfficersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
