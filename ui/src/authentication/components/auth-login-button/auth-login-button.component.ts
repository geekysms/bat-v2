import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/authentication/services/auth.service';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-login-button',
  templateUrl: './auth-login-button.component.html',
  styleUrls: ['./auth-login-button.component.scss'],
})
export class AuthLoginButtonComponent implements OnInit {
  @Input() userData: User;
  @Input() disabled: boolean;
  showLoader = false;

  constructor(
    private authSrv: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // console.log(this.authSrv.isLoggedIn(), 'check for login');
    // this.authSrv.isLoggedIn()
  }

  login(): void {
    this.showLoader = true;
    if (!(this.userData.mail || this.userData.password)) {
      console.log('please enter password or username');
    }
    // console.log('coming her');
    this.authSrv.login(this.userData).subscribe(data => {
      if (!isNullOrUndefined(data)) {
        this.router.navigateByUrl('/home');
      }
      console.log(data, 'data here at login button');
    }, error => {
      console.log(error, 'error here at login button');
    }, () => {
      console.log('completed');
      this.showLoader = false;
    });
  }

}
