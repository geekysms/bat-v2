import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// firebase module
import {FirebaseModule} from 'src/firebase/firebase.module';

// components
import {IonRegButtonComponent} from './components/ion-reg-button/ion-reg-button.component';
import {AuthLoginButtonComponent} from './components/auth-login-button/auth-login-button.component';
import {AuthLogoutButtonComponent} from './components/auth-logout-button/auth-logout-button.component';
import {AuthForgotButtonComponent} from './components/auth-forgot-button/auth-forgot-button.component';

// services
import { AuthService } from './services/auth.service';

// Local Modules
import {SharedModule} from 'src/shared/shared.module';



@NgModule({
  declarations: [IonRegButtonComponent, AuthLoginButtonComponent, AuthLogoutButtonComponent, AuthForgotButtonComponent],
  imports: [
    CommonModule,
    IonicModule,
    FirebaseModule,
    SharedModule
  ],
  exports : [IonRegButtonComponent, AuthLoginButtonComponent, AuthLogoutButtonComponent, AuthForgotButtonComponent],
  providers : [AuthService]
})
export class AuthenticationModule { }
