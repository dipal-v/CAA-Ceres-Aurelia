import {PLATFORM} from 'aurelia-pal';
import {inject} from 'aurelia-framework';
import {BaseConfig} from './baseConfig';


@inject(BaseConfig)
export class Storage {
    config: BaseConfig;
    constructor(config: BaseConfig) {
        this.config = config;
    }
    
    get(key: string): string {
        return this.getStorage().getItem(key);
    }
    
    set(key: string, value: string) {
        this.getStorage().setItem(key, value);
    }
    
    remove(key: string) {
        this.getStorage().removeItem(key);
    }

    getStorage(){
        return PLATFORM.global[this.config.storage];
    }
}
