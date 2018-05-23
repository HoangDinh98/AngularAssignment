import { Component, OnInit  } from '@angular/core';
import { LoginService } from './service/login.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLoggedin = true;
  email = '';

  constructor(private router: Router,
    private loginService: LoginService) {

  }

  ngOnInit() {
    this.isLoggedin = this.loginService.isLogged();
    this.email = this.loginService.email;

    this.loginService.loginConfirmed$.subscribe(
      isLogged => {
        console.log('hellloooo login  ' + isLogged);
        this.isLoggedin = isLogged;
        this.email = this.loginService.email;
      });
  }

}
