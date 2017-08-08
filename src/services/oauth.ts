import {inject} from 'aurelia-dependency-injection';
import {Authentication} from './authentication';
import {BaseConfig} from './baseConfig';


@inject(Authentication, BaseConfig)
export class AuthService {
    private authentication: Authentication;
    authenticated: boolean = false;
    public config: BaseConfig;
    constructor(authentication: Authentication, config: BaseConfig){
        this.authentication = authentication;
        this.config = config;
    }
}
