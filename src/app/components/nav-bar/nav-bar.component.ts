import { SessionService } from './../../services/session.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  homeLink = "/"

  constructor(private session: SessionService) { 

  }

  ngOnInit() {
    this.homeLink = this.session.isLoggedIn ? "/" : "/dashboard"
  }

}
