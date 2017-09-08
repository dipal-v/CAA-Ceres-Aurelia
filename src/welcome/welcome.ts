/**
* Welcome Class
*/
export class Welcome {
    /**
    * Welcome heading
    */
    public heading = 'Welcome to the Aurelia Navigation App!';

    /**
    * Firstname
    */
    public firstName = 'John';

    /**
    * Lastname
    */
    public lastName = 'Doe';

    /**
    * Previous name value
    */
    private previousValue = this.fullName;

    /**
    *  Getters can't be directly observed, so they must be dirty checked.
    * However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
    * To optimize by declaring the properties that this getter is computed from, uncomment the line below
    * as well as the corresponding import above.
    * @computedFrom('firstName', 'lastName')
    */
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    /**
     * submit fullname
    */
    public submit() {
        this.previousValue = this.fullName;
        window.alert(`Welcome, ${this.fullName}!`);
    }

    /**
    * logout
    */
    public canDeactivate() {
        if (this.fullName !== this.previousValue) {
        return window.confirm('Are you sure you want to leave?');
        }
    }
}

/**
* Uppercase converter class
*/
export class UpperValueConverter {

    /**
    * Default toVIew override
    */
    public toView(value) {
        return value && value.toUpperCase();
    }
}
