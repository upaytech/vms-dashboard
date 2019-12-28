import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { constants } from '../constants';
import { Volunteer } from '../model/Volunteer';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  constructor(private http: HttpClient) { }

  getVolunteers() {
    return this.http.get(constants.VOL_URL);
  }

  getVolunteer(id: number): Observable<Volunteer> {
    return this.http.get<Volunteer>(constants.VOL_URL+"/"+id);
  }
}
