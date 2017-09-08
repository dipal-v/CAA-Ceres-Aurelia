import {inject} from 'aurelia-framework';
import {AuthService} from '../oauth/oauth';
import {Router} from 'aurelia-router';

/**
* The Login 
*/
@inject(AuthService, Router)
export class Login {
    /**
    * the login status message
    */
    message: string;

    /**
    * the login router
    */
    router: Router;

    /**
    * The Login Constructor
    */
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
