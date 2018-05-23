import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from '../service/login.service';


@Injectable()
export class CheckLoginGuard implements CanActivate {

    constructor(private router: Router, private loginService: LoginService) {

    }

    canActivate() {

        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // alert('You don\'t have permission access to this page');
        alert('You need Login to do Next action');        
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    }
}
