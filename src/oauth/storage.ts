import {PLATFORM} from 'aurelia-pal';
import {inject} from 'aurelia-framework';
import {BaseConfig} from './baseConfig';


/**
 * Storage abstraction
 *
 * Store items in any viable browser storage
 */
@inject(BaseConfig)
export class Storage {
    config: BaseConfig;

    /**
     * Constructor
     * @param {BaseConfig} a configuration instance
     */
    constructor(config: BaseConfig) {
        this.config = config;
    }
    
    /**
     * Get a value
     * @param {key} the dictionary key
     * @returns {string} the corresponding string value
     */
    get(key: string): string {
        return this.getStorage().getItem(key);
    }
    
    /**
     * Set a key value pair
     * @param {key} the dictionary key
     * @param {string} the value
     */
    set(key: string, value: string) {
        this.getStorage().setItem(key, value);
    }
    
    /**
     * Remove a key value pair
     * @param {key} the dictionary key
     */
    remove(key: string) {
        this.getStorage().removeItem(key);
    }

    /**
     * Get the handle to the chosen storage
     * @returns {storage}
     */
    getStorage(){
        return PLATFORM.global[this.config.storage];
    }
}
