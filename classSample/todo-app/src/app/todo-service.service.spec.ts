import { TestBed } from '@angular/core/testing';

import { TodoServiceService } from './todo-service.service';

describe('TodoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoServiceService = TestBed.get(TodoServiceService);
    expect(service).toBeTruthy();
  });
});
