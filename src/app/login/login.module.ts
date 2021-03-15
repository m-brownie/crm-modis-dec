import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up/page-sign-up.component';
import { FormSignInComponent } from './components/form-sign-in/form-sign-in.component';
import { FormSignUpComponent } from './components/form-sign-up/form-sign-up.component';


@NgModule({
  declarations: [PageSignInComponent, PageSignUpComponent, FormSignInComponent, FormSignUpComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
