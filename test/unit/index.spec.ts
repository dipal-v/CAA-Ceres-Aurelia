import {configure} from '../../src/oauth/index';
import {BaseConfig} from '../../src/oauth/baseConfig'

describe('index configure component', () => {
    let frameworkConfig;
    let baseConfig;

    beforeEach(()=>{
        frameworkConfig = jest.fn();
        frameworkConfig.container = jest.fn();
        frameworkConfig.container.get = jest.fn();
        baseConfig = new BaseConfig();
        frameworkConfig.container.get.mockReturnValueOnce(baseConfig);
        
    });
    
    it('check the configure object', () => {
        configure(frameworkConfig, {
                'baseUrl' : 'http://test.com'
            }
        );
        expect(baseConfig.baseUrl).toBe('http://test.com');
    });

    it('check the configure function', () => {
        configure(frameworkConfig, function(baseConfig){
            baseConfig.configure({
                'baseUrl' : 'http://test.com'
            });
        });
        expect(baseConfig.baseUrl).toBe('http://test.com');
    });

    it('check the configure undefined', () => {
        configure(frameworkConfig, undefined);
        expect(baseConfig.baseUrl).not.toBe('http://test.com');
    });
});