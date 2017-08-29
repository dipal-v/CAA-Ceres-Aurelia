import {inject} from 'aurelia-framework';
import {AuthService} from '../oauth/oauth';
import {Router} from 'aurelia-router';

@inject(AuthService, Router)
export class Login {
    message: string;
    router: Router;
    constructor(authService: AuthService, router: Router){
        this.message = "Access denied";
        this.router = router;
        authService.login().then(authenticatedUser => {
            this.message = "Authenticated";
            this.router.navigate("welcome");
        }).catch(guestUser=>{
            this.router.navigate("not-authorized");
        });;
    }
}
