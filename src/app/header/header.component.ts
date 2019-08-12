import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../common/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  email: String;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.email = "test@test.com";
  }

  onTitleClick() {
    this.router.navigate(['/']);
  }

  onLogoutClick() {
    this.authService.deauthenticate();
    this.router.navigate(['/login']);
  }

}
