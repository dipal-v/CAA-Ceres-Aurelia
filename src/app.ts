import {Router, RouterConfiguration} from 'aurelia-router';
//import { AuthorizationService } from 'aurelia-permission';
import { inject } from 'aurelia-framework';
import {AuthenticateStep} from './services/authenticateStep';
import {AuthService} from './services/oauth';


@inject(AuthService)
export class App {
    public router: Router;
    private authService: AuthService;

    constructor(authService: AuthService) {
        this.authService = authService;
    }

    public configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'CAA-Ceres-Aurelia';
        config.addPipelineStep('authorize', AuthenticateStep);

        config.map([{
            route: ['', 'welcome'],
            name: 'welcome',
            moduleId: 'welcome/welcome',
            nav: true,
            title: 'Welcome',
            auth: true,
            settings: {
                permission: {
                    only: ['AuthenticatedUser']
                }
            }
        },{
            route: 'simple',
            name: 'simple',
            moduleId: 'simple/simple',
            nav: true,
            title: 'Simple',
            auth: true,
            settings: {
                permission: {
                    only: ['AuthenticatedUser']
                }
            }
        },{
            route: 'users',
            name: 'users',
            moduleId: 'users/users',
            nav: true,
            title: 'Github Users',
            auth: true,
            settings: {
                permission: {
                    only: ['AuthenticatedUser']
                }
            }
        },{
            route: 'child-router',
            name: 'child-router',
            moduleId: 'child/child-router',
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
            moduleId: 'errors/not-authorized',
            nav: false,
            title: 'Not Authorized'
        },{
            route: 'login',
            name: 'xyz',
            moduleId: 'login/login',
            nav: true,
            title: "login"
        }]);

        this.router = router;
    }
}
