import {inject} from 'aurelia-framework';
import {AuthService} from '../services/oauth';


@inject(AuthService)
export class Login {
    constructor(authService: AuthService){
        authService.login();
    }
}
