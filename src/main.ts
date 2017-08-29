import '../styles/main.scss';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-fresh.css';
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

console.log(process.env.ELSE);

export function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin(PLATFORM.moduleName('oauth'))
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

    const loginPromise = new Promise((accept, reject)=>{
        let config = new BaseConfig();
        if (process.env.OAUTH_BASE){
            config.configure({
                baseUrl: process.env.OAUTH_BASE,
                oauthUrl: process.env.OAUTH_URL,
                clientId: process.env.OAUTH_CLIENTID
            })
        }
        let a = new AuthService(new Authentication(), config);
        a.login().then(authenticatedUser => {
            accept(authenticatedUser);
        }).catch(guestUser => {
            accept(guestUser);
        });
    });

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
