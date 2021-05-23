import { TestBed,inject } from '@angular/core/testing';

import { SalonSpaceService } from './salon-space.service';

describe('SalonSpaceService', () => {
 // let service: SalonSpaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    providers: [SalonSpaceService]
  });

  it('should be created', inject([SalonSpaceService], (service: SalonSpaceService) => {
    expect(service).toBeTruthy();
  }));
});
