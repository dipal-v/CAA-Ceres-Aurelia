import {Messages} from '../../src/components/messages';
import {EventAggregator} from 'aurelia-event-aggregator';

describe('the Messages component', () => {
    
    it('clear message', () => {
        let ea = new EventAggregator();
        let messages = new Messages(ea);
        messages.message = "Test"
        messages.clear();
        expect(messages.message).toBeNull();
    });
});