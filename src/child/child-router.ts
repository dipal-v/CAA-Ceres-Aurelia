import {Router, RouterConfiguration} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';


export class ChildRouter {
  public heading = 'Child Router';
  public router: Router;
  public menus;
  public parent;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.map([{
        route: ['','child1'],
        name: 'child1',
        moduleId: PLATFORM.moduleName('child/child1'),
        nav: true, title: 'Child One'
    },{
        route: 'child2',
        name: 'child2',
        moduleId: PLATFORM.moduleName('child/child2'),
        nav: true,
        title: 'Child Two'
    },{
        route: 'child3',
        name: 'child3',
        moduleId: PLATFORM.moduleName('child/child3'),
        nav: true,
        title: 'Child Three' },
    ]);

    this.router = router;

  }
}
