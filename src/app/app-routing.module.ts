import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { BooksComponent } from './components/books/books.component';
import { GuardsComponent } from './guards/guards.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'


const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[GuardsComponent]},
  {path:'users', component: UsersComponent, canActivate:[GuardsComponent]},
  {path:'books', component: BooksComponent, canActivate:[GuardsComponent]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
