import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
    selector: 'home-component',
    templateUrl: 'login.component.html'
})
export class LoginComponent {

    public emailUser: any;
    public passwordUser: any;
    // public navbar: NavbarComponent;

    error = '';
    constructor(private router: Router,
        private loginService: LoginService,
        private cdr: ChangeDetectorRef,
        public navbar: NavbarComponent,
    ) {
    }

    ngOnInit() {
    }

    ngAfterViewChecked() {
        //your code to update the model
        this.cdr.detectChanges();
    }

    CheckLogin(value: any) {
        console.log(value);
        if (this.navbar.Login(value)) {
            // this.loginService.setLogin(true);
            // this.navrbar.getEmail();
            this.router.navigate(['/dashboard']);
        } else {
            // login failed
            this.error = 'Email or password is incorrect';
            this.loginService.loginChange(false);
        }

    }
}