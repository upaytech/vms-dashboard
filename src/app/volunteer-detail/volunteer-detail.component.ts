import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteer-detail',
  templateUrl: './volunteer-detail.component.html',
  styleUrls: ['./volunteer-detail.component.sass']
})
export class VolunteerDetailComponent implements OnInit {

  title: string = "Volunteer Details";

  constructor() { }

  ngOnInit() {
  }

}
