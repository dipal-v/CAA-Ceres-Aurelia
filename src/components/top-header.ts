import {AuthService} from '../oauth/oauth';
import {OAuthUser} from '../oauth/oauth-user';
import {inject} from 'aurelia-framework';


@inject(AuthService)
export class TopHeader {
    private user: OAuthUser;
    constructor(authService:AuthService){
        this.user = authService.getUser();
    }
}
