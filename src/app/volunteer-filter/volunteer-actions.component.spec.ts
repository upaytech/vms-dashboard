import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerActionsComponent } from './volunteer-actions.component';

describe('VolunteerActionsComponent', () => {
  let component: VolunteerActionsComponent;
  let fixture: ComponentFixture<VolunteerActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
