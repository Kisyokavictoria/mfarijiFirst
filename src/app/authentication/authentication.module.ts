import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './SignUp/signup/signup.component';
import { LoginComponent } from './Login/login/login.component';



@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent
  ],
  exports: [
    LoginComponent,
    SignupComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class AuthenticationModule { }
