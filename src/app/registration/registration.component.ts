import {Component} from '@angular/core';

import { routerTransition } from '../animations/router.animations';

@Component({
    template: `
    
    <br>
    <router-outlet></router-outlet>
    <br>
    <div class="form-group"> 
    <div class="col-md-2 col-md-offset-5    col-sm-10">
        <!--<button style="background-color: #7d72d1;" type="submit" class="btn btn-default">Next ...> </button>-->
        <div class="form-group     ">        
        <a (click)="saveInfo()" routerLink="{{routeName}}" class="btn btn-block btn-primary col-md-offset-3"> Next &nbsp;   <span class="glyphicon glyphicon-circle-arrow-right"></span>
        </a>
    </div>
    </div>
    </div>
    `
})

export class RegistrationComponent{

    private routeName = 'account-info';
    saveInfo(){
        console.log('i savd');  
    }
}
