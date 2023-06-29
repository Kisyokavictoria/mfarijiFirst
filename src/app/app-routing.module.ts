import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './authentication/SignUp/signup/signup.component';
import { LoginComponent } from './authentication/Login/login/login.component';

const routes: Routes = [
  {path: '', component:SignupComponent},
  {path:'login', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
