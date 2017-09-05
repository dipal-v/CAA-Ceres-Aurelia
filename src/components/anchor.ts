import {customElement, bindable, inject, bindingMode} from 'aurelia-framework';

@customElement('anchor')
@bindable({ name: 'cool', attribute: 'data', defaultBindingMode: bindingMode.oneWay})
@inject(Element)
export class Anchor {
    constructor(private element: Element) {
	    this.element = element;
    }

    public click(event){
	    let e = this.getCustomEvent('single', {bubbles: true});
	    this.element.dispatchEvent(e);
    }

    public getCustomEvent(name, params : {}){
        return new CustomEvent(name, params);
    }
}
