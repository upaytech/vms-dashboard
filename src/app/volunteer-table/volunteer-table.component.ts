import { Component, OnInit, NgZone } from '@angular/core';
import { columnDefs } from './column-def';
import { VolunteerService } from '../common/services/volunteer.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  constructor(private volunteerService: VolunteerService, private ngZone: NgZone, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.rowData = this.volunteerService.getVolunteers();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  onRowClick(params) {
    const id = params.data.id || 1;
    // todo: read this https://stackoverflow.com/questions/53645534/navigation-triggered-outside-angular-zone-did-you-forget-to-call-ngzone-run
    this.ngZone.run( () => this.router.navigate(['/volunteer', id]));
  }
}
