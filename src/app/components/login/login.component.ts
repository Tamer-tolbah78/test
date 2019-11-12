import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.module'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean;
  users: User[];
  isLogedIn: boolean = false

  constructor(private UsersService: UsersService) { }

  ngOnInit() {
    this.users = this.UsersService.getUsers()
  }
  onSubmit(form: NgForm) {
    let usrName = form.value['userName'];
    let psword = form.value['password'];
  if( usrName == this.users.values.name)
  {console.log(usrName)};
  }

}
