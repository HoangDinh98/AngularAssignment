import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from './app.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { BooksComponent } from './books/books.component';
import { BookService } from './book.service';
import { AppRoutingModule } from './/app-routing.module';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

// Service 
import { LoginService } from './service/login.service';
import { SignUpService } from './service/signup.service';


// Guard
import { CheckLoginGuard } from './guards/check-login.guard';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    MessagesComponent,
    BooksComponent,
    BookDetailComponent,
    BookCreateComponent,
    LoginComponent,
    SignupComponent,
    TruncatePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    MessageService,
    BookService,
    LoginService,
    SignUpService,
    NavbarComponent,
    CheckLoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
