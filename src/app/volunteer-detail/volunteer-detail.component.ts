import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Volunteer } from '../common/model/Volunteer';
import { VolunteerService } from '../common/services/volunteer.service';

@Component({
  selector: 'app-volunteer-detail',
  templateUrl: './volunteer-detail.component.html',
  styleUrls: ['./volunteer-detail.component.sass']
})
export class VolunteerDetailComponent implements OnInit {

  title: string = "Volunteer Details";
  public volunteer: Volunteer = new Volunteer();

  constructor(private route: ActivatedRoute, public router: Router, private volunteerService: VolunteerService) { }

  ngOnInit() {
    let id =  parseInt(this.route.snapshot.paramMap.get('id'));
    this.volunteerService.getVolunteer(id).subscribe(volunteer => this.volunteer = volunteer);
  }

}
