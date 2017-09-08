import extend from 'extend';


/**
 * Configure oauth component
 * 
 * Important fields are: 
 *    baseUrl
 *    oauthUrl
 *    redirectUrl
 *    clientId
 */
export class BaseConfig {

    /**
     * Merge current settings with incoming settings
     * @param  {Object} incoming Settings object to be merged into the current configuration
     */
    configure(incoming: {}) {
        for (let key in incoming) {
            const value = incoming[key];

            if (value !== undefined) {
                if (Array.isArray(value) || typeof value !== 'object' || value === null) {
                    this[key] = value;
                }
            }
        }
    }

    
    baseUrl = 'https://identity.inmarsat.com';
    oauthUrl = '/as/authorization.oauth2';
    redirectUrl = 'http://ppwebtest01.inmarsat.com/caa-ceres-aurelia/';
    auth = true;
    clientId = 'imdemo_client';
    loginRoute = '#/login';
    loginRedirect = '#/';
    storage = 'localStorage';
    state='happy';
}
