import {customElement, bindable, bindingMode} from 'aurelia-framework';

/**
* The Status component
*/
@customElement('status')
@bindable({ name: 'status', attribute: 'data', defaultBindingMode: bindingMode.oneWay})
export class Status {
}
