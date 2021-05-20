import { TestBed } from '@angular/core/testing';

import { SalonSpaceService } from './salon-space.service';

describe('SalonSpaceService', () => {
  let service: SalonSpaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalonSpaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
