import { TestBed } from '@angular/core/testing';

import { ProfileRequestServiceService } from './profile-request-service.service';

describe('ProfileRequestServiceService', () => {
  let service: ProfileRequestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileRequestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
