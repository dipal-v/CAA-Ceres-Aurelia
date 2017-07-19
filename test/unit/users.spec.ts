import {Users} from 'src/users/users';
import {UserService} from 'src/services/user-service';
import {HttpClient} from 'aurelia-fetch-client';

class HttpStub {
  items: any[];
  
  fetch(url) {
    return new Promise(resolve => {
      resolve({ json: () => this.items });
    });
  }
  
  configure(func) { }
}

function createHttpStub(): any {
  return new HttpStub();
}

describe('the Users module', () => {

  it('sets fetch response to users', (done) => {
    var http = createHttpStub(),
	    userservice = new UserService(http),
        sut = new Users(userservice),
        itemStubs = [1],
        itemFake = [2];
        
    http.items = itemStubs;
    
    sut.activate().then(() => {
      expect(sut.users).toBe(itemStubs);
      expect(sut.users).not.toBe(itemFake);
      done();
    });
  });
});
