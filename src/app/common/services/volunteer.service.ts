import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  VOL_URL: 'http://localhost:4200/assets/volunteer.json';

  constructor(private http: HttpClient) { }

  getVolunteers() {
    return this.http.get(this.VOL_URL);
  }
}
