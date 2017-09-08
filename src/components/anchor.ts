import {customElement, bindable, inject, bindingMode} from 'aurelia-framework';

/**
 * The Anchor component
 */
@customElement('anchor')
@bindable({ name: 'cool', attribute: 'data', defaultBindingMode: bindingMode.oneWay})
@inject(Element)
export class Anchor {
    /**
    * The Anchor component constructor
    */
    constructor(private element: Element) {
	    this.element = element;
    }

    /**
    * The link click evnt triggers a custom event
    */
    public click(event){
	    let e = this.getCustomEvent('single', {bubbles: true});
	    this.element.dispatchEvent(e);
    }

    /**
    * The creates a new custom event
    */
    public getCustomEvent(name, params : {}){
        return new CustomEvent(name, params);
    }
}
