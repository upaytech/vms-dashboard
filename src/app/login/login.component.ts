import { Component, OnInit } from '@angular/core';
import { AuthService } from '../common/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  authenticate() {
    if(this.authService.authenticate()) {
      this.router.navigate(['/home']);
    }
    
  }

}
