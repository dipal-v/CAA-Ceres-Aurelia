import {inject} from 'aurelia-framework';
import {AuthService} from '../services/oauth';


@inject(AuthService)
export class Login {
    constructor(authService: AuthService){
        authService.login().then(data => {
            console.log(data);
        }).catch(error=>{
            console.log(error);
        });;
    }
}
