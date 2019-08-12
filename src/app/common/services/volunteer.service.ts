import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  constructor(private http: HttpClient) { }

  getVolunteers() {
    return [
      { firstName: 'Toyota', lastName: 'Celica', zone: 'Pune', mobile: '9405674356', id: 'someID'},
      { firstName: 'Ford', lastName: 'Mondeo', zone: 'Mouda', mobile: '8767656567' },
      { firstName: 'Porsche', lastName: 'Boxter', zone: 'Nagpur', mobile: '8978765456' },
      { firstName: 'Toyota', lastName: 'Celica', zone: 'Pune', mobile: '9405674356' },
      { firstName: 'Ford', lastName: 'Mondeo', zone: 'Mouda', mobile: '8767656567' },
      { firstName: 'Porsche', lastName: 'Boxter', zone: 'Nagpur', mobile: '8978765456' },
      { firstName: 'Toyota', lastName: 'Celica', zone: 'Pune', mobile: '9405674356' },
      { firstName: 'Ford', lastName: 'Mondeo', zone: 'Mouda', mobile: '8767656567' },
      { firstName: 'Porsche', lastName: 'Boxter', zone: 'Nagpur', mobile: '8978765456' },
      { firstName: 'Toyota', lastName: 'Celica', zone: 'Pune', mobile: '9405674356' },
      { firstName: 'Ford', lastName: 'Mondeo', zone: 'Mouda', mobile: '8767656567' },
      { firstName: 'Porsche', lastName: 'Boxter', zone: 'Nagpur', mobile: '8978765456' },
      { firstName: 'Toyota', lastName: 'Celica', zone: 'Pune', mobile: '9405674356' },
      { firstName: 'Ford', lastName: 'Mondeo', zone: 'Mouda', mobile: '8767656567' },
      { firstName: 'Porsche', lastName: 'Boxter', zone: 'Nagpur', mobile: '8978765456' },
      { firstName: 'Toyota', lastName: 'Celica', zone: 'Pune', mobile: '9405674356' },
      { firstName: 'Ford', lastName: 'Mondeo', zone: 'Mouda', mobile: '8767656567' },
      { firstName: 'Porsche', lastName: 'Boxter', zone: 'Nagpur', mobile: '8978765456' },
    ];
  }
}
