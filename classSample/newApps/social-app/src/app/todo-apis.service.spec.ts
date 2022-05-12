import { TestBed } from '@angular/core/testing';

import { TodoApisService } from './todo-apis.service';

describe('TodoApisService', () => {
  let service: TodoApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
