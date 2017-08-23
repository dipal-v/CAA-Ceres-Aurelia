import {AuthenticateStep} from '../../src/services/authenticateStep';
import {BaseConfig} from '../../src/services/baseConfig';
import {Authentication} from '../../src/services/authentication';
import {AuthService} from '../../src/services/oauth';


class RoutingContextStub{
    public routes: any [];

    constructor(auth:boolean){
        this.routes = [{
            config: {
                route: ['', 'welcome'],
                name: 'welcome',
                title: 'Welcome',
                auth: auth,
	        nav: true, 
                settings: {
                    permission: {
                        only: ['AuthenticatedUser']
                    }
                },
            },
            fragment: ".test."
        }];
    }
    
    public getAllInstructions(){
        return this.routes;
    }
}


describe('the authentication step', () => {
    let sut;
    let authService;
    let config;
    
    beforeEach( () => {
        authService = new AuthService(new Authentication(), new BaseConfig());
        sut = new AuthenticateStep(authService);
    });

    it('should do redirect', () => {
        let routingContext = new RoutingContextStub(true);
        let callback = jest.fn();
        callback.cancel = jest.fn();
        sut.run(routingContext, callback);
        expect(callback.cancel).toHaveBeenCalled(); 
       expect(callback).not.toHaveBeenCalled();
    });
    
    it('should not do redirect if it is authenticated', () => {
        authService.authenticated = true;
        let routingContext = new RoutingContextStub(true);
        let callback = jest.fn();
        callback.cancel = jest.fn();
        sut.run(routingContext, callback);
        expect(callback.cancel).not.toHaveBeenCalled();
        expect(callback).toHaveBeenCalled();
    });
    
    it('should do redirect if route is login', () => {
        authService.authenticated = true;
        authService.config.loginRoute = ".test.";
        let routingContext = new RoutingContextStub(false);
        let callback = jest.fn();
        callback.cancel = jest.fn();
        sut.run(routingContext, callback);
        
        expect(callback.cancel).toHaveBeenCalled();
        expect(callback).not.toHaveBeenCalled();
    });
    
});
