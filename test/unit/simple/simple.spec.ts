import {EventAggregator} from 'aurelia-event-aggregator';
import { Messenger} from '../../../src/services/messenger';
import { Simple} from '../../../src/simple/simple';

describe('the simple grid', () => {
    let ea;
    let simple;

    beforeEach( () => {
        ea = new EventAggregator();
        simple = new Simple(ea);
    });

    it('check all type of messages', () => {
        simple.showWarn();
        ea.subscribe('messages', response => {
            expect(response).toBe({text: "Warning: This is a warning for the user!", type: 'warn'});
        });
        simple.showInfo();
        ea.subscribe('messages', response => {
            expect(response).toBe({text: 'Info: This is information for the user!', type: 'info'});
        });
        simple.showError();
        ea.subscribe('messages', response => {
            expect(response).toBe({text: "Error: This is a error message for the user!", type: 'error'});
        });
        simple.showSuccess();
        ea.subscribe('messages', response => {
            expect(response).toBe({text: "Success: This is a success message for the user!", type: 'success'});
        });
    });

    it('check all type of grid events', () => {
        let event = {};
        const spy = jest.spyOn(window, 'alert');
        simple.anchor_callback(event);
        expect(spy).toHaveBeenCalledWith('Called from anchor click.');    
        event = {
            'column': {
                colId : 'status'
            },
            'data': {
                'restrictions': {
                    'restriction': [
                        {'description': "test"}
                    ]
                },
                'status': "test status"
            }
        };
        simple.onStatusDbClicked(event);
        expect(spy).toHaveBeenCalledWith('double clicked test status');        
        simple.onRestrictionClicked(event);
        event.column.colId = 'restrictions';
        simple.onStatusDbClicked(event);
        simple.onRestrictionClicked(event);
        expect(spy).toHaveBeenCalledWith('single clicked test');
    });
});
