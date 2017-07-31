import {Component, OnInit} from '@angular/core';

import {RegisterUserService} from '../registerUser.service';
import {RegistrationDataService} from '../../data/registrationData.service';

@Component({
    template:`
        <style>
        .success-response{
            background-color: #00BC8C;
            color:white;
            text-transform: uppercase;
        }
        </style>
        <div class="row" *ngIf="result">
            <br>
            <br>
            <div class="col-md-4 col-sm-6 col-md-offset-4  " >
                <div class="col-md-offset-2">
                    <div class="alert alert-success">{{result}} </div>
                    <br>
                </div>
            </div>
            </div>
    `
})

export class CompleteRegistrationComponent implements OnInit{
    private result = '';
    constructor (private registrationService: RegisterUserService, private registrationDataService: RegistrationDataService){}

    ngOnInit(){
        this.registrationService.createUser(this.registrationDataService.getRegistration()).subscribe(data=>{
            this.result = data;
            console.log('result has been initialized to here: ', data);
        });
    }
}