import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLoggedin = false;
  public email = '';

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }


  ngOnInit() {
    this.isLoggedin = this.loginService.isLogged();
    this.email = this.loginService.getEmail();

    // console.log("FFF " + this.email);
  }

  Logout() {
    this.isLoggedin = false;
    this.loginService.logout();
    // alert('Logged out');
    this.router.navigate(['/login']);
    // alert('Logged out');
  }

}
