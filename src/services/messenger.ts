import {EventAggregator} from 'aurelia-event-aggregator';



// tslint:disable-next-line:no-internal-module
// tslint:disable-next-line:no-namespace
/**
* The Messenger Service
*/
export class Messenger {

    /**
    * The event aggregator
    */
    public ea: EventAggregator ;

    /**
    * The massenger service constructor
    */
    constructor(EventAggregator) {
        this.ea = EventAggregator;
    }

    /**
    * The info message publisher
    */
    public info(message: String) {

        this.ea.publish('messages', {text: message, type: 'info'});

    }

    /**
    * The warn message publisher
    */
    public warn(message: String) {

        this.ea.publish('messages', {text: message, type: 'warning'});

    }

    /**
    * The success message publisher
    */
    public success(message: String) {

        this.ea.publish('messages', {text: message, type: 'success'});

    }

    /**
    * The error message publisher
    */
    public error(message: String) {

        this.ea.publish('messages', {text: message, type: 'error'});

    }
}
