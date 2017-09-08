import {AuthService} from '../oauth/oauth';
import {OAuthUser} from '../oauth/oauth-user';
import {inject} from 'aurelia-framework';

/**
 * The top header component
 *
 */
@inject(AuthService)
export class TopHeader {
    /**
    * top header user to show
    */
    private user: OAuthUser;
    /**
    * top header constructor
    */
    constructor(authService:AuthService){
        this.user = authService.getUser();
    }
}
