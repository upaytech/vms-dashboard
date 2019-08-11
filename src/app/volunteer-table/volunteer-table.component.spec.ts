import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerTableComponent } from './volunteer-table.component';

describe('VolunteerTableComponent', () => {
  let component: VolunteerTableComponent;
  let fixture: ComponentFixture<VolunteerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
