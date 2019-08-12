import { Component, OnInit } from '@angular/core';
import { columnDefs } from './column-def';
import { VolunteerService } from '../common/services/volunteer.service';

@Component({
  selector: 'app-volunteer-table',
  templateUrl: './volunteer-table.component.html',
  styleUrls: ['./volunteer-table.component.sass']
})
export class VolunteerTableComponent implements OnInit {


  gridApi;
  columns = columnDefs;
  rowData: any;
  rowSelection = "multiple";
  constructor(private volunteerService: VolunteerService) { }

  ngOnInit() {
    this.rowData = this.volunteerService.getVolunteers();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

}
