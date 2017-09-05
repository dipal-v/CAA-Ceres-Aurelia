import {HttpResponseMessage} from 'aurelia-http-client';

export class AuthInterceptor {

    response(message : HttpResponseMessage) : HttpResponseMessage{
        return message;
    }
    

    responseError(error: HttpResponseMessage) : HttpResponseMessage{
        throw error;
    }
}
