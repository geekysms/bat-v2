import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/authentication/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private authSrv: AuthService
  ) { }

  ngOnInit() {
    // console.log(this.authSrv.isLoggedIn(), 'check for login');
    // this.isLoggedIn(); // test remove later
    // this.authSrv.isLoggedIn()
  }

}
