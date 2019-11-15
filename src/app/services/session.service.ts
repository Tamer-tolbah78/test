import { Injectable } from '@angular/core';
import { User } from '../models/user.module';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private loggedInUser: User
  constructor(private router: Router) { }
  setLoggedUser(user: User) {this.loggedInUser = user}

  getLoggedInUser(): User {return this.loggedInUser}

  clearSession() {this.loggedInUser = null
  this.router.navigate([''])}

  get isLoggedIn(): boolean {if (this.loggedInUser ==null) {return false} else {return true}}
}
