import {inject} from 'aurelia-framework';
import {Authentication} from './authentication';
import {BaseConfig} from './baseConfig';
import {PLATFORM} from 'aurelia-pal';
import {HttpClient} from 'aurelia-http-client';
import {AuthInterceptor} from './oauthInterceptor';


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
                .withInterceptor(new AuthInterceptor());
        });

        client.post(this.config.oauthUrl, 'client_id='+this.config.clientId+'&response_type=token&redirect_uri='+this.config.redirectUrl)
            .then(data => {
                console.log(data);
            });

    }
}
