import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ForgotPage } from './forgot.page';

import {AuthenticationModule} from 'src/authentication/authentication.module';


const routes: Routes = [
  {
    path: '',
    component: ForgotPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ForgotPage]
})
export class ForgotPageModule {}
