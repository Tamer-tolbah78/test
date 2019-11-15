import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-guards',
  templateUrl: './guards.component.html',
  styleUrls: ['./guards.component.css']
})
export class GuardsComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {return this.sessionService.isLoggedIn}
  ngOnInit() {
  }

}