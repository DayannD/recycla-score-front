import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { ForgotPasswordComponent } from "./pages/forgot-password/forgot-password.component";
import { SignInComponent } from "./pages/sign-in/sign-in.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent
  ]
})
export class LoginModule { }
