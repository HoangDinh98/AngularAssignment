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


  ngOnChanges() {
    this.email = this.loginService.email;
    console.log("FFF " + this.email);
  }

  ngOnInit() {
    this.isLoggedin = this.loginService.isLogged();
    this.email = this.loginService.email;

    console.log("OFFF " + this.email + " sss " + this.isLoggedin);
  }

  // ngDoCheck() {
  //   this.email = this.loginService.email;
  //   console.log("DOFFF " + this.email)
  // }

  // ngAfterContentInit() {
  //   this.email = this.loginService.email;
  // }

  // ngAfterContentChecked() {
  //   this.email = this.loginService.email;
  // }

  // ngAfterViewInit() {
  //   this.email = this.loginService.email;
  // }

  // ngAfterViewChecked() {
  //   this.email = this.loginService.email;
  //   // console.log("FFF " + this.email);
  // }


  // getEmail() {
  //   this.email = this.loginService.email;
  // }

  Login(value: any) {
    if (this.loginService.login(value.email, value.password)) {
      this.isLoggedin = true;
      console.error('nav ' + this.isLoggedin);
      this.router.navigate(['/dashboard']);
    } else {
      this.isLoggedin = true;
    }
  }

  Logout() {
    this.isLoggedin = false;
    this.loginService.logout();
    // alert('Logged out');
    this.router.navigate(['/login']);
    // alert('Logged out');
  }

}
