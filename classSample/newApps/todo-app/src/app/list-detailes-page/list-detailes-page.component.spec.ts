import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDetailesPageComponent } from './list-detailes-page.component';

describe('ListDetailesPageComponent', () => {
  let component: ListDetailesPageComponent;
  let fixture: ComponentFixture<ListDetailesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDetailesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDetailesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
