import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingPublishedComponent } from './rating-published.component';

describe('RatingPublishedComponent', () => {
  let component: RatingPublishedComponent;
  let fixture: ComponentFixture<RatingPublishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingPublishedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingPublishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
