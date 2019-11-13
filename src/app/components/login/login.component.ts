import { AppRoutingModule } from './../../app-routing.module';
import { SessionService } from './../../services/session.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.module'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean;

  constructor(private usersService: UsersService, private session: SessionService, private routing: Router) {}

  ngOnInit() {
    
  }
  onSubmit(form: NgForm) {
    let usrName = form.value['userName'];
    let psword = form.value['password'];
    let user = this.usersService.getUsers().find(x => (x.username == usrName && x.password == psword) );
    if (user) {
      this.session.setLoggedUser(user);
      this.routing.navigate(['users']);
    } else {
      alert('Username/Password Incorrect')
    }
  }

}
