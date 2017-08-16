import '../styles/main.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap';
import {Aurelia} from 'aurelia-framework';
import { PermissionStore, Configuration } from 'aurelia-permission';
import {PLATFORM} from 'aurelia-framework';
import {AuthService} from './services/oauth';
import {Authentication} from './services/authentication';
import {BaseConfig} from './services/baseConfig';
import * as Bluebird from 'bluebird';


// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
Bluebird.config({ warnings: { wForgottenReturn: false } });
 
const loginPromise = new Promise((accept, reject)=>{
    let a = new AuthService(new Authentication(), new BaseConfig());
    a.login().then(data => {
        accept(sampleUser);
    }).catch(guestUser => {
        accept(guestUser);
    });
});

export function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin(PLATFORM.moduleName('aurelia-datatable'))
		.plugin(PLATFORM.moduleName('ag-grid-aurelia'))
		.plugin(PLATFORM.moduleName('aurelia-pager'))
        .plugin(PLATFORM.moduleName('aurelia-permission'), (permissionStore: PermissionStore, configuration: Configuration) =>
                configurePermissions(aurelia, permissionStore, configuration));

  // Uncomment the line below to enable animation.
   //aurelia.use.plugin('aurelia-animator-css');

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}

function configurePermissions(aurelia: Aurelia, permissionStore: PermissionStore, configuration: Configuration) {
  configuration.useDefaultRedirectRoute('not-authorized');
 
  loginPromise
    .then((user: any) => {
      const allApplicationPermissions = ['AuthenticatedUser'];
 
      permissionStore.definePermissions(
        allApplicationPermissions,
        // simple custom definition, the same function for all permissions 
        // it only checks if particular permission is included in user's permissions array 
        // if permissions need to have different definitions, then use 
        // permissionStore.definePermissions() method for each specific permission 
        (permission: string) => {
          //console.log('Custom definition function: ' + user.permissions.includes(permission));
          return user.permissions.includes(permission);
        }
      );
 
      return user;
    });
}
