import {ChildRouter} from '../../src/child/child-router';

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

  it('contains a router property', () => {
    expect(sut.router).toBeDefined();
  });

  it('configures the heading', () => {
    expect(sut.heading).toEqual('Child Router');
  });

  it('should have a welcome route', () => {
    expect(sut.router.routes).toContain(
        { route: ['', 'child1'],
          name: 'child1',
          moduleId: 'child/child1',
          nav: true,
          title: 'Child One' }
          );
  });

  it('should have a users route', () => {
     expect(sut.router.routes).toContain(
           { route: 'child2',
           name: 'child2',
           moduleId: 'child/child2',
           nav: true,
           title: 'Child Two' });
  });

  it('should have a child router route', () => {
    expect(sut.router.routes).toContain(
          { route: 'child3',
          name: 'child3',
          moduleId: 'child/child3',
          nav: true,
          title: 'Child Three' });
  });
});
