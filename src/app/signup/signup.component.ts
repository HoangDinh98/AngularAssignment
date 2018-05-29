import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../service/signup.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { empty } from 'rxjs/Observer';
import { Subject } from 'rxjs';
import { Errors } from '../errors';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  is_unique: any;
  public user: User;
  is_exist;
  data: any;
  errors = new Errors;

  constructor(
    private signupService: SignUpService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.errors.email = '';
    this.errors.repassword = '';
  }

  checkSignUP(data: User) {
    console.log(data);
    this.data = data;
    this.errors.email = '';
    this.errors.repassword = '';

    if (this.data.password != this.data.repassword) {
      this.errors.repassword = 'Repassword and Password not match';
      return false;
    }

    delete this.data.repassword;

    // console.log('Test 2 ' + JSON.stringify(this.data));

    this.signupService.checkUniquedEmail(data.email)
      .then(
        res => { this.doSignUP(res.length) }
      );
  }

  doSignUP(status) {
    // console.log("A1 " + this.data);
    // console.log("A2 " + status);

    if (status == 0) {
      this.signupService.addUser(this.data).subscribe();
      this.errors.email = '';
      // console.log("A2 " + this.is_exist);
      alert('Your Account has been created. \nPlease Login for Next Action');
      this.router.navigate(['/login']);
    }
    else {
      this.errors.email = 'Email is Exist';
      // this.is_exist = true;
      // console.log("A3 " + this.is_exist);
    }
  }

}
