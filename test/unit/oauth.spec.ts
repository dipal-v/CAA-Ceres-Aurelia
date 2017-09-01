import {AuthService} from '../../src/oauth/oauth';
import {BaseConfig} from '../../src/oauth/baseConfig';
import {Authentication} from '../../src/oauth/authentication';

describe('the login', () => {
    let authService;

    beforeEach( () => {
        authService = new AuthService(new Authentication(), new BaseConfig());
    });
    
    it('check get guest user', () => {
        let user = authService.getUser();
        expect(user.fullname).toBe('Guest');
    });

    it('check not authenticated login', () => {
        let user = authService.login();
    });
   
});
