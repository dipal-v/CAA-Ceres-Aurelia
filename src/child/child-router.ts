import {Router, RouterConfiguration} from 'aurelia-router';

export class ChildRouter {
  public heading = 'Child Router';
  public router: Router;
  public menus;
  public parent;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      
      
      { route: ['','child1'],  name: 'child1',  moduleId: 'child/child1',  nav: true, title: 'Child One' },
      { route: 'child2',  name: 'child2',  moduleId: 'child/child2',  nav: true, title: 'Child Two' },
      { route: 'child3',  name: 'child3',  moduleId: 'child/child3',  nav: true, title: 'Child Three' },
    ]);

    

    this.router = router;
    
  }
}
