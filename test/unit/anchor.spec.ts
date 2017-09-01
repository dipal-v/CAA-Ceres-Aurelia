import{Anchor} from '../../src/components/anchor'
import {Container} from 'aurelia-dependency-injection';

describe('the anchor component', () => {
    let container;
    let element;

    // Before each test, we set some things up
    beforeEach(() => {
        // Create a global container from the dependency-injection module
        container = new Container().makeGlobal();

        // Register an instance of Element and set it to be a DIV.
        element = container.registerInstance(Element, '<a>');
    });
    
    it('check click event', () => {
        let test_obj = "hello";
        let anchor = new Anchor(element);
        anchor.getCustomEvent = jest.fn();
        anchor.getCustomEvent.mockReturnValueOnce(test_obj);
        element.dispatchEvent = jest.fn();
        anchor.click({});
        expect(element.dispatchEvent.mock.calls[0][0]).toBe (test_obj);
        expect(anchor.getCustomEvent.mock.calls[0][0]).toBe('single');
        expect(anchor.getCustomEvent.mock.calls[0][1]).toEqual({'bubbles': true});
    });
});