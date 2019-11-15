import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.module';
import { UsersService } from '../../services/users.service';
import { SessionService } from '../../services/session.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[]
  loggedUser = this.session.getLoggedInUser().userGivenName
  constructor(private UsersService: UsersService, private session: SessionService) { }

  ngOnInit() {
    this.users = this.UsersService.getUsers()
  }
}
