import {inject} from 'aurelia-framework';
import {AuthService} from '../services/oauth';
import {Router} from 'aurelia-router';


@inject(AuthService, Router)
export class Login {
    message: string;
    router: Router;
    constructor(authService: AuthService, router: Router){
        this.message = "Access denied";
        this.router = router;
        authService.login().then(data => {
			this.message = "Authenticated";
            this.router.navigate("welcome");
            console.log(data);
        }).catch(error=>{
            this.router.navigate("not-authorized");
            console.log(error);
        });;
    }
}
