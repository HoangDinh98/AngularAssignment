import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
    selector: 'home-component',
    templateUrl: 'login.component.html'
})
export class LoginComponent {

    public emailUser: any;
    public passwordUser: any;

    error = '';
    constructor(private router: Router,
        private loginService: LoginService,
        private cdr: ChangeDetectorRef
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
        if (this.loginService.login(value.email, value.password)) {
            // this.loginService.setLogin(true);
            this.router.navigate(['/']);

        } else {
            // login failed
            this.error = 'Email or password is incorrect';
            this.loginService.loginChange(false);
        }

    }
}