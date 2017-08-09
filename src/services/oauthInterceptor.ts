import {HttpResponseMessage} from 'aurelia-http-client';

export class AuthInterceptor {

    response(message : HttpResponseMessage) : HttpResponseMessage{
        console.log(message);
        return message;
    }
    

    responseError(error: HttpResponseMessage) : HttpResponseMessage{
        console.log(error);
        return error;
    }
}
