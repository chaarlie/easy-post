import {Injectable} from '@angular/core';
 
import {Registration} from './registration.model';

@Injectable()
export class RegistrationDataService{

    private registration = new Registration();
    
    setFirstName(firstName: string){
        this.registration.firstName = firstName;
    }

    setLastName(lastName: string){
        this.registration.lastName = lastName;
    }

    
    setEmail(email: string){
        this.registration.email = email;
    }

    
    setPhone(phone: string){
        this.registration.phone = phone;
    }

    setUsername(username: string){
        this.registration.username = username;
    }
    
    setPassword(password: string){
        this.registration.password = password;
    }

    getRegistration(){
        return this.registration;
    }
}