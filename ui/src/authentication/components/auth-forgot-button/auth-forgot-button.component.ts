import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/authentication/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-forgot-button',
  templateUrl: './auth-forgot-button.component.html',
  styleUrls: ['./auth-forgot-button.component.scss'],
})
export class AuthForgotButtonComponent implements OnInit {
  @Input() userData: User;
  @Input() disabled: boolean;


  constructor(
    private authSrv: AuthService,
    private router: Router
  ) { }

  ngOnInit() {}

  forgot() {
    this.authSrv.forgot(this.userData).subscribe( data => {
      console.log('reset successfully', data);
      this.router.navigateByUrl('/login');
    }, error => {
      console.log(error, 'reset failure');
    });
  }

}
