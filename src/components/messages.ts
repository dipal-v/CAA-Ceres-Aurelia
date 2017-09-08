import {EventAggregator} from 'aurelia-event-aggregator';
import { inject } from 'aurelia-framework';

/**
* The Messages component
*/
@inject(EventAggregator)
export class Messages {
    /**
    * The event aggregator for subscribe and publish
    */
    public ea: EventAggregator;
    /**
    * The suscriber
    */
    public subscriber;
    /**
    * The message
    */
    public message;

    /**
    * The Messages Constructor
    */
    constructor (EventAggregator) {
        this.ea = EventAggregator;

    }

    /**
    * Clear the message
    */
    public clear() {
        this.message = null;
    }

    /**
    * The attached method overide
    */
    public attached() {
        this.subscriber = this.ea.subscribe('messages', response => {
            this.message = response;
        });
    }

    /**
    * The dettached method overide
    */
    public detached() {
        this.subscriber.dispose();
    }

}
