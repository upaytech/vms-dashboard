import { TestBed } from '@angular/core/testing';

import { VolunteerService } from './volunteer.service';

describe('VolunteerService', () => {
  let service: VolunteerService 
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(VolunteerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getVolunteers() should return list of volunteers', () => {
    fail();
  });
});
