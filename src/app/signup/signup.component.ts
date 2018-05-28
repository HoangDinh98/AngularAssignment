import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../service/signup.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { empty } from 'rxjs/Observer';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  is_unique: any ;
  error = '';
  public user: User;

  constructor(
    private signupService: SignUpService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  // ngAfterContentInit() {
  //   this.is_unique = this.signupService.checkUniquedEmail(data.email).subscribe(user => this.user = user);
  //   console.log(this.is_unique.lenght);
  // }

  doSignUP(data: any) {
    console.log(data);
    // console.log(this.signupService.checkUniquedEmail(data.email));
    this.user = this.signupService.checkUniquedEmail(data.email);

    console.log(this.user);

    if (this.is_unique == 0 ) {
      alert('OK');
      // this.router.navigate(['/dashboard']);
    } else {
      // login failed
      this.error = 'Email or password is incorrect';
    }
  }

}
