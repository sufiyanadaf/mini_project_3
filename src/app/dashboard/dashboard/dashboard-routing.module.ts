import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from '../body/body/body.component';
import { HeaderComponent } from '../header/header/header.component';
import { LeftNavigationPanelComponent } from '../left-navigation-panel/left-navigation-panel/left-navigation-panel.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
 {path:'header', component:HeaderComponent},
{path:'left-navigation-panel', component:LeftNavigationPanelComponent},
{path:'body', component:BodyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
