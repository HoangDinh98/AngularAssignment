import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { BookDetailComponent }  from './book-detail/book-detail.component';
import { BookCreateComponent }  from './book-create/book-create.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UiComponent } from './ui/ui.component';

import { CheckLoginGuard } from './guards/check-login.guard';


// @NgModule({
//   imports: [
//     CommonModule
//   ],  
//   declarations: []
// })

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'books', component: BooksComponent, canActivate: [CheckLoginGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [CheckLoginGuard] },
  { path: 'create', component: BookCreateComponent, canActivate: [CheckLoginGuard] },  
  { path: 'edit/:id', component: BookDetailComponent, canActivate: [CheckLoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'ui', component: UiComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
