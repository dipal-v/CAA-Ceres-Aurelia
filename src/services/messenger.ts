import {EventAggregator} from 'aurelia-event-aggregator';



// tslint:disable-next-line:no-internal-module
// tslint:disable-next-line:no-namespace
export class Messenger {

    public ea: EventAggregator ;

    constructor(EventAggregator) {
        this.ea = EventAggregator;
    }

    public info(message: String) {

        this.ea.publish('messages', {text: message, type: 'info'});

    }
    public warn(message: String) {

        this.ea.publish('messages', {text: message, type: 'warning'});

    }
    public success(message: String) {

        this.ea.publish('messages', {text: message, type: 'success'});

    }
    public error(message: String) {

        this.ea.publish('messages', {text: message, type: 'error'});

    }
}
