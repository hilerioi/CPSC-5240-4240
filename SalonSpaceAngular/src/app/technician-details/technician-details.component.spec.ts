import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianDetailsComponent } from './technician-details.component';

describe('TechnicianDetailsComponent', () => {
  let component: TechnicianDetailsComponent;
  let fixture: ComponentFixture<TechnicianDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicianDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicianDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
