import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication/authentication.component';
import { LoginComponent } from './authentication/login/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';


const routes: Routes = [
  {path: '', component: AuthenticationComponent},
  
  {
    path: '',
    loadChildren:()=>import('./authentication/authentication/authentication.module').then(m =>m.AuthenticationModule)
  },
  {path:'dashboard', component:DashboardComponent},
  {path:'dashboard',
  loadChildren: ()=>import('./dashboard/dashboard/dashboard.module').then(m=>m.DashboardModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
