import {Router, RouterConfiguration} from 'aurelia-router';
import { AuthorizationService } from 'aurelia-permission';
import { inject } from 'aurelia-framework';


@inject(AuthorizationService)
export class App {
  public router: Router;
  constructor(private authorizationService: AuthorizationService) { }

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'CAA-Ceres-Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome/welcome',      nav: true, title: 'Welcome' },
      { route: 'simple', name: 'simple',      moduleId: 'simple/simple',      nav: true, title: 'Simple' },
      { route: 'users',         name: 'users',        moduleId: 'users/users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child/child-router', nav: this.authorizationService.isAuthorized('ViewChildRouter'), title: 'Child Router', settings: {
          permission: {
            only: ['ViewChildRouter']
          }
        } },
      {route: 'not-authorized', name: 'not-authorized', moduleId: 'errors/not-authorized', nav: false, title: 'Not Authorized'}
    ]);

    this.router = router;
  }
}
