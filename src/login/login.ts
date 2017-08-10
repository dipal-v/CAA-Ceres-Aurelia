import {inject} from 'aurelia-framework';
import {AuthService} from '../services/oauth';


@inject(AuthService)
export class Login {
    message: string;
    constructor(authService: AuthService){
        this.message = "Access denied";
        authService.login().then(data => {
            console.log(data);
        }).catch(error=>{
            console.log(error);
        });;
    }
}
