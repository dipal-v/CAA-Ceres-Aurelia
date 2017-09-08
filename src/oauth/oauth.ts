import {inject} from 'aurelia-framework';
import {Authentication} from './authentication';
import {BaseConfig} from './baseConfig';
import {PLATFORM} from 'aurelia-pal';
import {HttpClient} from 'aurelia-http-client';
import {AuthInterceptor} from './oauthInterceptor';
import {OAuthUser} from './oauth-user';

/**
 * Open Authentication 2.0 Client Implimentation
 * 
 * It expose the oauth functionality as service
 */
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

    /**
     *
     * @returns {OAuthUser} A oauth user
     */
    getUser(){
        return this.user;
    }

    
    /**
     * Login the current user via oauth protocol
     * @returns {Promise<OAuthUser>}
     */
    login() : Promise<OAuthUser> {
        let client = new HttpClient();
        client.configure(config => {
            config.withHeader('content-type', 'application/x-www-form-urlencoded')
                .withBaseUrl(this.config.baseUrl)
                .withInterceptor(new AuthInterceptor());
        });

        return new Promise((resolve, reject) => {
            client.post(this.config.oauthUrl, 'client_id='+this.config.clientId+'&response_type=token&redirect_uri='+this.config.redirectUrl)
                .then(data => {
                    // Add this line will enable all menu
                    this.user.permissions = ['AuthenticatedUser'];
                    this.authenticated = true;
                    resolve(this.user);
                }).catch(error => {
                    reject(this.user);
                });
        });
    }
}
