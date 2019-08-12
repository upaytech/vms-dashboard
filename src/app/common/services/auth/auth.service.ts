import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private authenticated = false;

  isAuthenticated(): boolean {
    // todo: incomplete
    return this.authenticated;
  }

  authenticate(): boolean {
    this.authenticated = true;
    return this.authenticated;
  }

  deauthenticate() {
    this.authenticated = false;
  }
}
