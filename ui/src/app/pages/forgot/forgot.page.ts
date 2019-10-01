import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  forgotGroup: FormGroup = new FormGroup({
    mail: new FormControl('', Validators.required)
  });

  constructor() { }

  ionViewWillEnter() {
    this.forgotGroup.reset();
  }

  ngOnInit() {
  }

}
