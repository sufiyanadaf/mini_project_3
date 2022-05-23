import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';
import { RegistrationComponent } from '../registration/registration/registration.component';
import { AuthenticationComponent } from './authentication.component';

const routes: Routes = [
  
  {path:'registration', component:RegistrationComponent},
  {path:'login', component:LoginComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
