import {ChildRouter} from '../../src/child/child-router';
import {Child1} from '../../src/child/child1';
import {Child2} from '../../src/child/child2';
import {Child3} from '../../src/child/child3';

class RouterStub {
    private routes;

    public configure(handler) {
	    handler(this);
    }

    public map(routes) {
        this.routes = routes;
    }
    
    public addPipelineStep(stepName, stepClass) {
    }
}

describe('the Child Router module', () => {
    let sut;
    let mockedRouter;

    beforeEach(() => {
        mockedRouter = new RouterStub();
        sut = new ChildRouter();
        sut.configureRouter(mockedRouter, mockedRouter);
    });

    it('children check', () => {
        let child1 = new Child1();
        let child2 = new Child2();
        let child3 = new Child3();
    });

    it('contains a router property', () => {
        expect(sut.router).toBeDefined();
    });

    it('configures the heading', () => {
        expect(sut.heading).toEqual('Child Router');
    });

    it('should have a welcome route', () => {
        var child1_route = sut.router.routes[0];
        expect(child1_route).toEqual({ 
            route: ['', 'child1'],
            name: 'child1',
            moduleId: 'child/child1',
            nav: true,
            title: 'Child One' 
        });
    });

    it('should have a users route', () => {
        var child2_route = sut.router.routes[1];
        expect(child2_route).toEqual({ 
            route: 'child2',
            name: 'child2',
            moduleId: 'child/child2',
            nav: true,
            title: 'Child Two' 
        });
    });

    it('should have a child router route', () => {
        var child3_route = sut.router.routes[2];
        expect(child3_route).toEqual({ 
            route: 'child3',
            name: 'child3',
            moduleId: 'child/child3',
            nav: true,
            title: 'Child Three' 
        });
    });
});
