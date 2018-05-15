import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { BookDetailComponent }  from './book-detail/book-detail.component';

// @NgModule({
//   imports: [
//     CommonModule
//   ],  
//   declarations: []
// })

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'create', component: BookDetailComponent },  
  { path: 'edit/:id', component: BookDetailComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
