import { Component, Input } from '@angular/core';
import { LoginService } from './loginService.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
})

export class LoginComponent {
    @Input()
    username;

    @Input()
    password;

    constructor(private loginService: LoginService, private router: Router){}

    doSubmit(event): void {
        event.preventDefault();

        this.loginService.doLogin(this.username, this.password);
    }
}