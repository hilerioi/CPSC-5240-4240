import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListPageComponent } from './list-page.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ListServiceService } from '../list-service.service';
import {MatSort} from '@angular/material/sort';

describe('ListPageComponent', () => {
  let httpTestingController: HttpTestingController;
  let service: ListServiceService;
  let component: ListPageComponent;
  let fixture: ComponentFixture<ListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ListServiceService],      
      declarations: [ListPageComponent, MatSort, MatTableDataSource]
    })
    .compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ListServiceService);

  });

  it ('should create the list component', () => {
    fixture = TestBed.createComponent(ListPageComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
