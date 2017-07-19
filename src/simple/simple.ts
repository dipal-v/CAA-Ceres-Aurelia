import {EventAggregator} from 'aurelia-event-aggregator';
import { inject } from 'aurelia-framework';
import { Messenger} from '../services/messenger';
import {GridOptions} from 'ag-grid';

@inject(EventAggregator)
export class Simple {
  public data = [{id: 1, name: 'Pipo'}, {id: 2, name: 'Mario'}];
  private ea: EventAggregator;
  private messenger: Messenger;

  private rowData: any[];
  private columnDefs: any[];


  // Getters can't be directly observed, so they must be dirty checked.
  // However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  // To optimize by declaring the properties that this getter is computed from, uncomment the line below
  // as well as the corresponding import above.
  // @computedFrom('firstName', 'lastName')
  constructor (EventAggregator) {

        this.ea = EventAggregator;
        this.messenger = new Messenger(this.ea);
    }


  public showWarn () {
      this.messenger.warn('Warning: This is a warning for the user!');
  }
  public showInfo () {
      this.messenger.info('Info: This is information for the user!');
  }
  public showSuccess () {
      this.messenger.success('Success: This is a success message for the user!');
  }
  public showError () {
      this.messenger.error('Error: This is a error message for the user!');
  }

  }
