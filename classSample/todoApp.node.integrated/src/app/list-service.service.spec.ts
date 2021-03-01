import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ListServiceService } from './list-service.service';

describe('ListServiceService', () => {
  let httpTestingController: HttpTestingController;
  let service: ListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ListServiceService]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('return To Do Lists', () => {
    const mockLists = [
      {
        name: "Grocery List",
        description: "Grocery List for home.",
        listId: 1,
        due: "04-27-2015",
        state: "A",
        owner: "israelh",
        items: "5"
        },
        {
        name: "Car Shopping List",
        description: "Cars I need to try before buying a car.",
        listId: 2,
        due: "05-27-2015",
        state: "A",
        owner: "israelh",
        items: "4"
        }
    ];

    service.getLists().subscribe( data => {
      expect(data.length).toBeGreaterThanOrEqual(2);
      expect(data[0].name).toEqual(mockLists[0].name);
      expect(data[0].description).toEqual(mockLists[0].description);
      expect(data[0].listId).toEqual(mockLists[0].listId);
      expect(data[0].due).toEqual(mockLists[0].due);
    });

    const req = httpTestingController.expectOne(
      service.url
    );

    req.flush(mockLists);
  });

});


