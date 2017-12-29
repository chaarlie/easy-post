import {Component} from '@angular/core';

import {RegistrationDataService} from '../../data/registrationData.service';


@Component({
    template:`
   
    <form class="form-horizontal">
      <div class="form-group ">
        <label class="control-label col-sm-2 col-md-offset-3" for="email">Email:</label>
        <div class="col-md-3">
          <input type="email" class="form-control" name="email" [(ngModel)]="email" id="email" >
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-2 col-sm-2 col-md-offset-3"  for="phone">Phone:</label>
        <div class="col-md-3"> 
          <input type="text" class="form-control" name="phone"  [(ngModel)]="phone" id="phone" >
        </div>
      </div>
      
    
    </form>
    `
})

export class ContactInfoComponent{
    private email = '';
    private phone = '';
    private routeName = 'complete';
    
    constructor (private registrationService: RegistrationDataService){}

    saveInfo(){
        this.registrationService.setEmail(this.email);
        this.registrationService.setPhone(this.phone);
        console.log(this.registrationService.getRegistration());
    }
}
