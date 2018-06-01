import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { Errors } from '../errors';


@Component({
    selector: 'home-component',
    templateUrl: 'login.component.html'
})
export class LoginComponent {

    public emailUser: any;
    public passwordUser: any;
    public errors = new Errors;
    private userdata: any;
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

    CheckLogin(data: any) {
        console.log(data);
        this.userdata = data;

        this.errors.email = '';
        this.errors.password = '';

        this.login(data);
    }

    login(data: any) {
        this.loginService.checkAccount(data.email)
            .then(
                response => { this.doLogin(response, response.length) }
            );
    }

    doLogin(user: any, is_exist) {

        console.log(JSON.stringify(user));
        console.log(is_exist);

        if (is_exist == 0) {
            this.errors.email = 'Email or Password is incorrect';
            return false;
        }

        if (this.userdata.password != user[0].password) {
            this.errors.password = 'Password is incorrect';
            return false;
        }
        localStorage.setItem('currentUser', JSON.stringify({ email: user[0].email, token: '123f' }));
        this.loginService.setLogin(true);

        alert('Login Successful!');
        this.router.navigate(['/admin']);
        window.location.reload();
    }
}