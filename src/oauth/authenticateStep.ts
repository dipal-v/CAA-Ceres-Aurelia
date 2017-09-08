import {inject} from 'aurelia-framework';
import {Redirect} from 'aurelia-router';
import {AuthService} from './oauth';


/**
 * Check each navigation step where the user should be authenticated
 */
@inject(AuthService)
export class AuthenticateStep {
    private authService: AuthService;
    constructor(authService: AuthService) {
        this.authService = authService;
    }

    /**
     * This function is called when user navigates through
     * the routes
     */
    run(routingContext, next) {
        const isLoggedIn = this.authService.authenticated;
        const loginRoute = this.authService.config.loginRoute;
        if (routingContext.getAllInstructions().some(route => route.config.auth === true)) {
            if (!isLoggedIn) {
                return next.cancel(new Redirect(loginRoute));
            }
        } else if (isLoggedIn && routingContext.getAllInstructions().some(route => route.fragment === loginRoute)) {
            return next.cancel(new Redirect(this.authService.config.loginRedirect));
        }
        return next();
    }
}
