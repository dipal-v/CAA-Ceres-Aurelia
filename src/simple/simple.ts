import {EventAggregator} from 'aurelia-event-aggregator';
import { inject } from 'aurelia-framework';
import { Messenger} from '../services/messenger';
import {GridOptions, GridApi} from 'ag-grid';

/**
* The Simple page class
*/
@inject(EventAggregator)
export class Simple {
    /**
    * row data 
    */
    public data = [{id: 1, name: 'Pipo'}, {id: 2, name: 'Mario'}];
    /**
    * Event aggregator
    */
    private ea: EventAggregator;
    /**
    * Messenger
    */
    private messenger: Messenger;

    /**
    * Grid options
    */
    private gridOptions: GridOptions;

    /**
    * Grid Api
    */
    private gridApi: GridApi;

  // 
    /**
    * Getters can't be directly observed, so they must be dirty checked.
    * However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
    * To optimize by declaring the properties that this getter is computed from, uncomment the line below
    * as well as the corresponding import above.
    * @computedFrom('firstName', 'lastName')
    */
    constructor (EventAggregator) {

        this.ea = EventAggregator;
        this.messenger = new Messenger(this.ea);
        this.gridOptions = <GridOptions> {};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.pagination = true;
        this.gridOptions.paginationAutoPageSize = true;
        this.gridOptions.onGridReady = () => {
            this.gridApi = this.gridOptions.api;
            this.gridApi.sizeColumnsToFit();
            this.gridApi.addEventListener('cellClicked', this.onRestrictionClicked);
            this.gridApi.addEventListener('cellDoubleClicked', this.onStatusDbClicked);
        };
        this.gridOptions.enableSorting = true;
        this.gridOptions.enableFilter = true;
        this.gridOptions.sortingOrder = ['desc', 'asc', null];
    }

    /**
    * Captures the restriction click event
    */
    public onRestrictionClicked(event) {
        if (event.column.colId === 'restrictions' && event.data.restrictions) {
            window.alert('single clicked ' + event.data.restrictions.restriction[0].description);
        }
    }

    /**
    * Captures te Status double click event
    */
    public onStatusDbClicked(event) {
        if (event.column.colId === 'status') {
            window.alert('double clicked ' + event.data.status);
        }
    }

    /**
    * calback when the link is clicked
    */
    public anchor_callback(event) {
        window.alert("Called from anchor click.");
    }

    /**
    * show warning message
    */
    public showWarn () {
        this.messenger.warn('Warning: This is a warning for the user!');
    }

    /**
    * show info message
    */
    public showInfo () {
        this.messenger.info('Info: This is information for the user!');
    }

    /**
    * show sucess message
    */
    public showSuccess () {
        this.messenger.success('Success: This is a success message for the user!');
    }

    /**
    * show error message
    */
    public showError () {
        this.messenger.error('Error: This is a error message for the user!');
    }

    /**
    * Create test data
    */
    private createRowData(){
        return [
            {
            'id': 1449,
            'name': 'uibot1-i8po2nuj06617cb873e9agku',
            'status': 'Complete',
            'created': '2015-04-20T08:58:48Z',
            'submitted': '2015-04-20T08:58:50Z',
            'updated': '2015-04-20T08:58:51Z',
            'restrictions': {
                'restriction': [
                    {
                    'description':'Location Restriction China Only: China'
                    }
                ]},
            'voucherNumber': '2540109178000001'
        },
            {
            'id': 1444,
            'name': 'uibot2-i8po2fyz06617cb873atks4b',
            'status': 'Cancelled',
            'created': '2015-04-20T08:58:38Z',
            'updated': '2015-04-20T08:58:39Z',
            'voucherNumber' : '2000109178002101'
        },
            {
            'id': 1447,
            'name': 'uibot3-i8po133006617cb8734vpkpb',
            'status': 'Created',
            'created': '2015-04-20T08:57:37Z',
            'submitted': '2015-04-20T08:57:39Z',
            'updated': '2015-04-20T08:57:55Z',
            'voucherNumber': '2000109178000001'
        },
            {
            'id': 1441,
            'name': 'uibot4-i8po0jtg06617cb8735eq07p',
            'status': 'Active',
            'created': '2015-04-20T08:57:12Z',
            'submitted': '2015-04-20T08:57:13Z',
            'updated': '2015-04-20T08:57:15Z',
            'voucherNumber': '2000109348000001'
        },
            {
            'id': 1443,
            'name': 'uibot5-i8po00u706617cb873c32g9n',
            'status': 'Failed',
            'created': '2015-04-20T08:56:47Z',
            'submitted': '2015-04-20T08:56:49Z',
            'updated': '2015-04-20T08:56:50Z',
            'voucherNumber': '20001091780056701'
        },
            {
            'id': 1448,
            'name': 'uibot6-i8pnzfcm06617cb873ekq3ki',
            'status': 'In Progress',
            'created': '2015-04-20T08:56:20Z',
            'submitted': '2015-04-20T08:56:23Z',
            'updated': '2015-04-20T08:56:25Z'
        },
            {
            'id': 1445,
            'name': 'uibot7-i8le52jw0d787cb87362taqr',
            'status': 'Expired',
            'created': '2015-04-17T09:03:15Z',
            'submitted': '2015-04-17T09:03:17Z',
            'updated': '2015-04-17T09:03:17Z'
        },
            {
            'id': 1440,
            'name': 'uibot8-i8le2oak0d787cb8739it24j',
            'status': 'Redeemed',
            'created': '2015-04-17T09:01:25Z',
            'submitted': '2015-04-17T09:01:27Z',
            'updated': '2015-04-17T09:01:43Z'
        },
            {
            'id': 1446,
            'name': 'uibot9-i8le24ix0d787cb873fto5op',
            'status': 'Complete',
            'created': '2015-04-17T09:01:00Z',
            'submitted': '2015-04-17T09:01:02Z',
            'updated': '2015-04-17T09:01:03Z'
        },
            {
            'id': 1442,
            'name': 'uibot0-i8le1ljz0d787cb87364uc4x',
            'status': 'Pending',
            'created': '2015-04-17T09:00:35Z',
            'submitted': '2015-04-17T09:00:37Z',
            'updated': '2015-04-17T09:00:38Z',
            'restrictions': {
                'restriction': [{
                    'description': 'Location Restriction China Only: China'
                }]
            }
        }
        ];
    }

}
