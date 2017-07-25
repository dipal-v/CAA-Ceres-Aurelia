import {UserService} from '../services/user-service';
import { inject } from 'aurelia-framework';

@inject(UserService)
export class Users {

  public heading = 'Github Users';
  public users = [];
  private userService: UserService;

  constructor(UserService) {
    this.userService = UserService;

  }

  public activate() {
    return this.userService.getUsers()
               .then(users => this.users = users as any);
  }
}
