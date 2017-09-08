import {HttpResponseMessage} from 'aurelia-http-client';

/**
 * @todo implement access token validation
 * @todo re-authentication if access token is invalid
 */
export class AuthInterceptor {

    response(message : HttpResponseMessage) : HttpResponseMessage{
        return message;
    }
    

    responseError(error: HttpResponseMessage) : HttpResponseMessage{
        throw error;
    }
}
