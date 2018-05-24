import { TestBed, inject } from '@angular/core/testing';

import { ListServiceService } from './list-service.service';

describe('ListServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListServiceService]
    });
  });

  it('should be created', inject([ListServiceService], (service: ListServiceService) => {
    expect(service).toBeTruthy();
  }));
});
