import {Router, RouterConfiguration} from 'aurelia-router';
//import { AuthorizationService } from 'aurelia-permission';
import { inject } from 'aurelia-framework';
import {AuthenticateStep} from './oauth/authenticateStep';
import {AuthService} from './oauth/oauth';
import {PLATFORM} from 'aurelia-pal';

/**
* The App
*/
@inject(AuthService)
export class App {
    /**
    * The router
    */
    public router: Router;

    /**
    * The authenticetion service
    */
    private authService: AuthService;

    /**
    * The App construcor
    */
    constructor(authService: AuthService) {
        this.authService = authService;
    }

    /**
    * The App configure router
    */
    public configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'CAA-Ceres-Aurelia';
        config.addPipelineStep('authorize', AuthenticateStep);

        config.map([{
            route: ['', 'welcome'],
            name: 'welcome',
            moduleId: PLATFORM.moduleName('./welcome/welcome'),
            title: 'Welcome',
            auth: true,
	    nav: true,
            settings: {
                permission: {
                    only: ['AuthenticatedUser']
                }
            }
        },{
            route: 'simple',
            name: 'simple',
            moduleId: PLATFORM.moduleName('./simple/simple'),
            title: 'Simple',
	    nav: true,
            auth: true,
            settings: {
                permission: {
                    only: ['AuthenticatedUser']
                }
            }
        },{
            route: 'users',
            name: 'users',
            moduleId: PLATFORM.moduleName('./users/users'),
            title: 'Github Users',
	    nav: true,
            auth: true,
            settings: {
                permission: {
                    only: ['AuthenticatedUser']
                }
            }
        },{
            route: 'child-router',
            name: 'child-router',
            moduleId: PLATFORM.moduleName('./child/child-router'),
	    nav: true,
            title: 'Child Router',
            settings: {
                permission: {
                    only: ['AuthenticatedUser']
                }
            },
            auth: true
        },{
            route: 'not-authorized',
            name: 'not-authorized',
	    nav: false,
            moduleId: PLATFORM.moduleName('errors/not-authorized'),
            title: 'Not Authorized'
        },{
            route: 'login',
            name: 'xyz',
	    nav: true,
            moduleId: PLATFORM.moduleName('login/login'),
            title: "login"
        }]);

        this.router = router;
    }
}
