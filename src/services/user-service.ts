import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

/**
* The git users service
*/
@autoinject
export class UserService {

    /**
    * git user service constructor
    */
    constructor(private http: HttpClient) {
        http.configure(config => {
            config
            .useStandardConfiguration()
            .withBaseUrl('https://api.github.com/');
        });
    }

    /**
     * return all the users
    */
    public getUsers() {
        return this.http.fetch('users')
        .then(response => response.json());
    }
}
