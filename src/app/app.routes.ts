import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {RegistrationComponent} from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NotAuthorizedComponent} from './error/not-authorized.component';
import {ContactInfoComponent} from './registration/contact/contactInfo.component';
import {PersonalInfoComponent} from './registration/personal/personalInfo.component';
import {AccountInfoComponent} from './registration/account/accountInfo.component';
import {CompleteRegistrationComponent} from './registration/complete/completeRegistration.component';
import {AuthGuard} from './auth/auth-guard.service';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]  },
    {
        path: 'register', 
        component: RegistrationComponent, 
        children: [
            {
                path: '' ,
                component: PersonalInfoComponent
            }, {
                path: 'account-info',
                component: AccountInfoComponent
            }, {
                path: 'contact-info',
                component: ContactInfoComponent
            }, {
                path: 'complete',
                component:CompleteRegistrationComponent
            }
        ]
     },
     { path: 'unauthorized', component: NotAuthorizedComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    useHash: true
});