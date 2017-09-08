import {UserService} from '../services/user-service';
import { inject } from 'aurelia-framework';

/**
* User Service Class
*/
@inject(UserService)
export class Users {

    /**
    * User service heading
    */
    public heading = 'Github Users';
    
    /**
    * users array 
    */
    public users = [];

    /**
    * user service
    */
    private userService: UserService;

    /**
    * user service constructor
    */
    constructor(UserService) {
        this.userService = UserService;
    }

    /**
    * activate the users
    */
    public activate() {
        return this.userService.getUsers()
                .then(users => this.users = users as any);
    }
}
