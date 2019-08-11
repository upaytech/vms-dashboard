import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerFilterComponent } from './volunteer-filter.component';

describe('VolunteerFilterComponent', () => {
  let component: VolunteerFilterComponent;
  let fixture: ComponentFixture<VolunteerFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
