import {inject} from 'aurelia-framework';
import {Authentication} from './authentication';
import {BaseConfig} from './baseConfig';
import {PLATFORM} from 'aurelia-pal';
import {HttpClient} from 'aurelia-http-client';
import {AuthInterceptor} from './oauthInterceptor';
import {OAuthUser} from './oauth-user';


@inject(Authentication, BaseConfig)
export class AuthService {
    private authentication: Authentication;
    authenticated: boolean = false;
    public config: BaseConfig;
    private user: OAuthUser

    constructor(authentication: Authentication, config: BaseConfig){
        this.authentication = authentication;
        this.config = config;
        this.user = new OAuthUser('known', 'Guest');

    }

    getUser(){
        return this.user;
    }

    login(){
        let client = new HttpClient();
        client.configure(config => {
            config.withHeader('content-type', 'application/x-www-form-urlencoded')
                .withBaseUrl(this.config.baseUrl)
                .withInterceptor(new AuthInterceptor());
        });

        return new Promise((resolve, reject) => {
            client.post(this.config.oauthUrl, 'client_id='+this.config.clientId+'&response_type=token&redirect_uri='+this.config.redirectUrl)
                .then(data => {
                    console.log(data);
                    resolve(data);
                }).catch(error => {
                    console.log(error);
                    reject(this.user);
                });
        });
    }
}
