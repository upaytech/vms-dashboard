import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Volunteer } from '../common/model/Volunteer';

@Component({
  selector: 'app-volunteer-detail',
  templateUrl: './volunteer-detail.component.html',
  styleUrls: ['./volunteer-detail.component.sass']
})
export class VolunteerDetailComponent implements OnInit {

  title: string = "Volunteer Details";


  constructor(private router: Router) { }

  ngOnInit() {
  }

}
