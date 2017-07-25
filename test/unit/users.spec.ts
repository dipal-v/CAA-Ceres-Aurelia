import {Users} from 'src/users/users';
import {UserService} from 'src/services/user-service';

class HttpStub {
  public items: any[];

  public fetch(url) {
    return new Promise(resolve => {
      resolve({ json: () => this.items });
    });
  }

  public configure(func) { return 0; }
}

function createHttpStub(): any {
  return new HttpStub();
}

describe('the Users module', () => {

  it('sets fetch response to users', (done) => {
      let http = createHttpStub();
      let userservice = new UserService(http);
      let sut = new Users(userservice);
      let itemStubs = [1];
      let itemFake = [2];

      http.items = itemStubs;

      sut.activate().then(() => {
          expect(sut.users).toBe(itemStubs);
          expect(sut.users).not.toBe(itemFake);
          done();
      });
  });
});
