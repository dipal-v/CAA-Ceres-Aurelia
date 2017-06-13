import {EventAggregator} from 'aurelia-event-aggregator';
import { inject } from 'aurelia-framework';

@inject(EventAggregator)
export class Messages {
    public _messages;
    public ea: EventAggregator;
    public subscriber;

    public message;

    constructor (EventAggregator) {
        this.ea = EventAggregator;

    }
    public clear() {
        this.message = null;
    }

    private attached() {
        this.subscriber = this.ea.subscribe('messages', response => {
            this.message = response;
        });
    }

    private detached() {
        this.subscriber.dispose();
    }


}