import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIntroPageComponent } from './list-intro-page.component';

describe('ListIntroPageComponent', () => {
  let component: ListIntroPageComponent;
  let fixture: ComponentFixture<ListIntroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIntroPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIntroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
