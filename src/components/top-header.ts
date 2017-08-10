import {AuthService} from '../services/oauth';
import {OAuthUser} from '../services/oauth-user';
import {inject} from 'aurelia-framework';


@inject(AuthService)
export class TopHeader {
    private user: OAuthUser;
    constructor(authService:AuthService){
        this.user = authService.getUser();
    }
}
