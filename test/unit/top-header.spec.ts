import {TopHeader} from '../../src/components/top-header';
import {AuthService} from '../../src/oauth/oauth';
import {BaseConfig} from '../../src/oauth/baseConfig';
import {Authentication} from '../../src/oauth/authentication';

describe('top header component', () => {
    
    it('check the class load', () => {
        let authService = new AuthService(new Authentication(), new BaseConfig());
        let topHeader = new TopHeader(authService);
    });
});