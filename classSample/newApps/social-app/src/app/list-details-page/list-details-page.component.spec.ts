import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDetailsPageComponent } from './list-details-page.component';

describe('ListDetailsPageComponent', () => {
  let component: ListDetailsPageComponent;
  let fixture: ComponentFixture<ListDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
