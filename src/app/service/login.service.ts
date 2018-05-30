import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Subject } from 'rxjs/Subject';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class LoginService {

    private usersUrl = 'https://5aebce23046d7b0014fb6e75.mockapi.io/users';

    public _isLoggedIn = false;
    public token: string;
    public email = '';

    constructor(
        private http: HttpClient
    ) {
        // set token if saved in local storage
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        // alert(currentUser.email);
        if (this.token) {
            this._isLoggedIn = true;
            this.email = currentUser.email;
        }

    }

    // tương tác giữa 2 component bới service
    // Observable string sources
    private loginConfirmedSource = new Subject<any>();
    // Observable string streams
    loginConfirmed$ = this.loginConfirmedSource.asObservable();

    checkAccount(email: String): any {
        const url = `${this.usersUrl}/?search=${email}`;
        console.log(url);

        let promise = new Promise((resolve, reject) => {
            this.http.get(url)
                .toPromise()
                .then(
                    res => {
                        resolve(res);
                        // console.log("In service " + res);
                    },
                    msg => { // Error
                        reject(msg);
                    }
                );;
        });

        return promise;
    }

    isLogged(): boolean {
        return this._isLoggedIn;
    }

    setLogin(isLoggedIn: boolean) {
        this._isLoggedIn = isLoggedIn;
        this.loginChange(isLoggedIn);
    }

    

    login(email: string, password: string): boolean {

        if (email === 'admin@gmail.com' && password === '123') {
            this.token = 'this is my token';
            this.email = email;
            localStorage.setItem('currentUser', JSON.stringify({ email: email, token: this.token }));
            this.setLogin(true);
            // return true to indicate successful login

            return true;
        } else {
            // return false to indicate failed login
            return false;
        }

    }



    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        this.email = null;
        localStorage.removeItem('currentUser');
        this._isLoggedIn = false;
        this.loginChange(this._isLoggedIn);
    }

    // Service message commands
    loginChange(_isLoggedIn: Boolean) {
        this.loginConfirmedSource.next(_isLoggedIn);
    }

    getEmail(): string {
        return 'myemail@gmail.com';
    }

}
