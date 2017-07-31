import {Injectable, OnInit} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';

import {Registration} from '../data/registration.model';

import {RegistrationDataService} from '../data/registrationData.service';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class RegisterUserService implements OnInit{

    private registration = new Registration();
    private serverResponse = '';

    constructor(
        private registrationData: RegistrationDataService, 
        private http: Http
    ){}
    
    ngOnInit(){
    //    this.registration = this.registrationData.getRegistration();
      //  console.log("registration at ngOnInit()", this.registration);
    }

    
    
    createUser(user) :Observable<any>{
            const bodyString = JSON.stringify({user:user});
            const headers = new Headers({ 'Content-Type': 'application/json'});
            const options = new RequestOptions({ headers: headers });
            let result = '';

            console.log("this is the new user", user);

           return  this.http.post('http://localhost:8080/api/register', bodyString, options).map((data) => data.text()); 
    }
}