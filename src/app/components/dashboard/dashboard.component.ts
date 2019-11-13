import { SessionService } from './../../services/session.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  myName = ""
  constructor(private session:SessionService) { }

  ngOnInit() {
    this.myName = this.session.getLoggedInUser().userGivenName
  }
  onLogout() {
    this.session.clearSession()
  }

}
