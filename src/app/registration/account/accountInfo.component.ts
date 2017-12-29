import {Component} from '@angular/core';

import {RegistrationDataService} from '../../data/registrationData.service';

@Component({
    template:`
    
    <form class="form-horizontal">
      <div class="form-group ">
        <label class="control-label col-sm-2 col-md-offset-3" for="username">Username:</label>
        <div class="col-md-3">
          <input type="text" [(ngModel)]="username" name="username" class="form-control" id="username" >
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-2 col-sm-2 col-md-offset-3"  for="last-name">Password:</label>
        <div class="col-md-3"> 
          <input type="password" [(ngModel)]="password" name="password" class="form-control" id="pwd" >
        </div>
      </div>
 
    </form>
    `
})

export class AccountInfoComponent{
    private username = '';
    private password = '';
    private routeName = 'contact-info';

    constructor (private registrationService: RegistrationDataService){}

    saveInfo(){
        this.registrationService.setUsername(this.username);
        this.registrationService.setPassword(this.password);
        console.log(this.registrationService.getRegistration());
    }
}