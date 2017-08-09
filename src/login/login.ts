import {AuthService} from '../services/oauth';
import {inject} from 'aurelia-dependency-injection';


@inject(AuthService)
export class Login {
    constructor(authService: AuthService){
        authService.login();
    }
}
