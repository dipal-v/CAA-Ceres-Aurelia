import {customElement, bindable, inject, bindingMode} from 'aurelia-framework';

@customElement('anchor')
@bindable({ name: 'cool', attribute: 'data', defaultBindingMode: bindingMode.oneWay})
@inject(Element)
export class Status {
	constructor(private element: Element) {
		this.element = element;
	}

	public click(event){
		let e = new CustomEvent('single', {bubbles: true});
		this.element.dispatchEvent(e);
	}
}
