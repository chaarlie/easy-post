import {Component} from '@angular/core';

import { routerTransition } from '../../animations/router.animations';

import {RegistrationDataService} from '../../data/registrationData.service';


@Component({
    selector: 'app-personal-info',
    template: `
    <form class="form-horizontal">
      <div class="form-group ">
        <label class="control-label col-sm-2 col-md-offset-3" for="first-name">Name:</label>
        <div class="col-md-3">
          <input type="text" class="form-control" name="firstName" [(ngModel)]="firstName" id="first-name" >
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-2 col-sm-2 col-md-offset-3"  for="last-name">Last Name:</label>
        <div class="col-md-3"> 
          <input type="text" class="form-control" name="lastName" [(ngModel)]="lastName" id="last-name" >
        </div>
      </div>
      
      <br>  

      <div class="form-group"> 
        <div class="col-md-2 col-md-offset-5    col-sm-10">
          <!--<button style="background-color: #7d72d1;" type="submit" class="btn btn-default">Next ...> </button>-->
          <div class="form-group     ">        
            <a [routerLink]="['/account-info']" (click)="saveInfo()"  class="btn btn-block btn-primary col-md-offset-3">
             Next &nbsp;   
            <span class="glyphicon glyphicon-circle-arrow-right"></span>
          </a>
        </div>
        </div>
      </div>
    </form>
    `
})

export class PersonalInfoComponent{
    private firstName = '';
    private lastName = '';

    constructor (private registrationService: RegistrationDataService){}

    saveInfo(){
        this.registrationService.setFirstName(this.firstName);
        this.registrationService.setLastName(this.lastName);
        console.log(this.registrationService.getRegistration());
    }
}
