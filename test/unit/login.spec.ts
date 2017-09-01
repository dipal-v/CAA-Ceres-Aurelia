import {AuthService} from '../../src/oauth/oauth';
import {Router} from 'aurelia-router';
import {Login} from '../../src/login/login'
import {BaseConfig} from '../../src/oauth/baseConfig';
import {Authentication} from '../../src/oauth/authentication';

describe('the login', () => {
    let authService;

    beforeEach( () => {
        authService = new AuthService(new Authentication(), new BaseConfig());
    });
    
    it('check failure login', () => {
        let callback = jest.fn();
        callback.navigate = jest.fn();
        let login = new Login(authService, callback);
    });
});
