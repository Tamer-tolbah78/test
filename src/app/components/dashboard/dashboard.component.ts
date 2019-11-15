import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})

export class DashboardComponent implements OnInit {
  myName = ""

  constructor(private session: SessionService) { }

  ngOnInit() {
    this.myName = this.session.getLoggedInUser().userGivenName
  }

  onLogout() {this.session.clearSession()}
}
