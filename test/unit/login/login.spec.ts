import {AuthService} from '../../../src/oauth/oauth';
import {Router} from 'aurelia-router';
import {Login} from '../../../src/login/login'
import {BaseConfig} from '../../../src/oauth/baseConfig';
import {Authentication} from '../../../src/oauth/authentication';
import {Container} from 'aurelia-dependency-injection';
import {OAuthUser} from '../../../src/oauth/oauth-user';

describe('the login', () => {
    let authService;
    let container;

    beforeEach( () => {
        authService = new AuthService(new Authentication(), new BaseConfig());
        authService.login = jest.fn();
        container = new Container().makeGlobal();
    });
    
    it('check failure login', () => {
        let router = new Router(container, null);
        let bad = new Promise((resolve, reject) => {
            reject();
        });
        authService.login.mockReturnValueOnce(bad);

        router.navigate = jest.fn();

        let login = new Login(authService, router);
        //expect(router.navigate.mock.calls[0][0]).toBe("not-authorized");
        //expect(login.message).toBe("Access denied");
    });

    it('check successful login', () => {
        let good = new Promise<OAuthUser>((resolve, reject) => {
            resolve(new OAuthUser('dummy', 'dummy'));
        });
        authService.login.mockReturnValueOnce(good);
        let router = new Router(container, null);
        router.navigate = jest.fn();

        let login = new Login(authService, router);
        //expect(router.navigate.mock.calls[0][0]).toBe("welcome");
        //expect(login.message).toBe("Authenticated");
    });
});
