import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Router} from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class LoginService {
    private apiUrl = 'http://localhost:8080/api/login/';
    private jwtHelper: JwtHelper = new JwtHelper();

    constructor(
        private http: Http,
        private router: Router,
        private authHttp: AuthHttp
    ){}


    doLogin(username: string, password: string) {

        const bodyString = JSON.stringify({ username: username, password: password });
        const headers = new Headers({ 'Content-Type': 'application/json'});
        const options = new RequestOptions({ headers: headers });

        this.http.post(this.apiUrl, bodyString, options)
            .subscribe((data) => {
                localStorage.setItem( 'token', data.json().token);
                this.router.navigate(['/dashboard']);

            },(error) => console.log(error), () => {});
    }
}