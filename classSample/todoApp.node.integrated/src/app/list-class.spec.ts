import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ListClass } from './list-class';

describe('ListClass', () => {
  let listObj: ListClass;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    listObj = {
      name: "Grocery List",
      description: "Grocery List for home.",
      listId: 1,
      due: "04-27-2015",
      state: "A",
      owner: "israelh",
      items: "5"
    };
  });

  it('should create an instance', () => {
    expect(listObj).toBeTruthy();
  });
});
