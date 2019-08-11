import { Component, OnInit } from '@angular/core';
import { columnDefs } from './column-def';

@Component({
  selector: 'app-volunteer-table',
  templateUrl: './volunteer-table.component.html',
  styleUrls: ['./volunteer-table.component.sass']
})
export class VolunteerTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  columns = columnDefs;

rowData = [
    { firstName: 'Toyota', lastName: 'Celica', zone: 'Pune', mobile: '9405674356' },
    { firstName: 'Ford', lastName: 'Mondeo', zone: 'Mouda', mobile: '8767656567' },
    { firstName: 'Porsche', lastName: 'Boxter', zone: 'Nagpur', mobile: '8978765456' }
];

}
