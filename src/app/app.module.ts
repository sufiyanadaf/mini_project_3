import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './authentication/registration/registration/registration.component';
import { LoginComponent } from './authentication/login/login/login.component';
import { BodyComponent } from './dashboard/body/body/body.component';
import { HeaderComponent } from './dashboard/header/header/header.component';
import { LeftNavigationPanelComponent } from './dashboard/left-navigation-panel/left-navigation-panel/left-navigation-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    BodyComponent,
    HeaderComponent,
    LeftNavigationPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
