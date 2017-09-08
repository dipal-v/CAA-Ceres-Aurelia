import {Router, RouterConfiguration} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

/**
* The Child Router
*/
export class ChildRouter {
    /**
    * The Child Router heading
    */
    public heading = 'Child Router';
    /**
    * The Child Router router object
    */
    public router: Router;
    /**
    * The menus
    */
    public menus;
    /**
    * The parent 
    */
    public parent;

    /**
    * The configure the routes
    */
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
