import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { BooksComponent } from './components/books/books.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'users', component: UsersComponent},
  {path:'books', component: BooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
