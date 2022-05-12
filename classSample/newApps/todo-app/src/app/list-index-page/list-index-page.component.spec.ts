import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIndexPageComponent } from './list-index-page.component';

describe('ListIndexPageComponent', () => {
  let component: ListIndexPageComponent;
  let fixture: ComponentFixture<ListIndexPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIndexPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIndexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
