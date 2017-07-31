import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app/app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/loginService.service';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JqueryIntegration } from './JqueryIntegration.component';
import {NotAuthorizedComponent } from './error/not-authorized.component';
import {RegistrationComponent} from './registration/registration.component';
import {PersonalInfoComponent} from './registration/personal/personalInfo.component';
import {ContactInfoComponent} from './registration/contact/contactInfo.component';
import {AccountInfoComponent} from './registration/account/accountInfo.component';
import {CompleteRegistrationComponent} from './registration/complete/completeRegistration.component';


import {AuthGuard} from './auth/auth-guard.service';
import {AuthService } from './auth/auth.service';
import {RegistrationDataService} from './data/registrationData.service';
import {RegisterUserService} from './registration/registerUser.service';
import {TagService} from './tag/tag.service';
import {PostService} from './post/post.service';

import {SearchPipe} from './dashboard/search.pipe';
 
import { routing } from './app.routes';

import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    JqueryIntegration,
    NotAuthorizedComponent,
    RegistrationComponent,
    PersonalInfoComponent,
    AccountInfoComponent,
    ContactInfoComponent,
    CompleteRegistrationComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule
  ],
  providers: [
    LoginService, 
    AuthService,
    AuthHttp,
    RegistrationDataService,
    RegisterUserService,
    TagService,
    PostService,
    AuthGuard,
      {
        provide: AuthHttp,
        useFactory: authHttpServiceFactory,
        deps: [Http, RequestOptions]
      }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
