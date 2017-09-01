import {Storage} from '../../src/oauth/storage';
import {BaseConfig} from '../../src/oauth/baseConfig';

class StorageStub{
    localStore : {}
    constructor(){
        this.localStore = {};
    }
    getItem (key: string) {
        return this.localStore[key];
    }

    setItem (key: string, value: string){
        this.localStore[key] = value;
    }

    removeItem (key: string){
        delete this.localStore[key];
    }
}

describe('the storage helper', () => {
    let storage;
    let storageStub;
    let config = new BaseConfig();
    let testKey = "key";
    let testValue = "value";

    beforeEach(()=>{
        storage = new Storage(config);
        storage.getStorage = jest.fn();
        storageStub = new StorageStub()
        storage.getStorage.mockReturnValueOnce(storageStub);
    });
    
    it('check get', () => {
        storageStub.setItem(testKey, testValue);        
        let result = storage.get(testKey);
        expect(result).toBe(testValue);
    });

    it('check set', () => {
        storage.set(testKey, testValue);
        let result = storageStub.getItem(testKey);
        expect(result).toBe(testValue);
    });

    it('check remove', () => {
        storageStub.setItem(testKey, testValue);        
        storage.remove(testKey);
        expect(storageStub).not.toContain(testKey);
    });
});