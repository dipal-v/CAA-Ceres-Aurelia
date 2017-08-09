import {inject} from 'aurelia-dependency-injection';
import {Authentication} from './authentication';
import {BaseConfig} from './baseConfig';
import {PLATFORM} from 'aurelia-pal';
import {HttpClient} from 'aurelia-http-client';


@inject(Authentication, BaseConfig)
export class AuthService {
    private authentication: Authentication;
    authenticated: boolean = false;
    public config: BaseConfig;

    constructor(authentication: Authentication, config: BaseConfig){
        this.authentication = authentication;
        this.config = config;
    }

    login(){
        let client = new HttpClient();
        client.configure(config => {
            config.withHeader('content-type', 'application/x-www-form-urlencoded')
                .withBaseUrl(this.config.baseUrl)
        });

        client.post(this.config.oauthUrl, 'client_id='+this.config.baseUrl+'&response_type=token&redirect_uri=http://ppwebtest01.inmarsat.com/caa-ceres-aurelia')
            .then(data => {
                console.log(data);
            });

    }
}
