import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.module';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean;
  users: User[];
  isLogedIn: boolean = false

  constructor(private UsersService: UsersService, private session: SessionService) { }

  ngOnInit() {
    this.users = this.UsersService.getUsers()
  }
  onSubmit(form: NgForm) {
    let usrName = form.value['userName'];
    let psword = form.value['password'];
    (x=>(x.username == usrName && x.password == psword));
    if(user) {this.session.setLoggedUser(user);
    this.routing.navigate(['users']);}
  else {alert('UserName / Password Incorrect')};
  }

}
