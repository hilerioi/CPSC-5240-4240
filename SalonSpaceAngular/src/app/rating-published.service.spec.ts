import { TestBed } from '@angular/core/testing';

import { RatingPublishedService } from './rating-published.service';

describe('RatingPublishedService', () => {
  let service: RatingPublishedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatingPublishedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
