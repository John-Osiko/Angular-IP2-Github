import { TestBed } from '@angular/core/testing';

import { SearchmygitService } from './searchmygit.service';

describe('SearchmygitService', () => {
  let service: SearchmygitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchmygitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
