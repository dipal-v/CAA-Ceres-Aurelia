import {BaseConfig} from './baseConfig';
import {Container} from 'aurelia-dependency-injection';


export function configure(frameworkConfig: { container: Container, globalResources: (...resources: string[]) => any }, config: {}|Function) {
    const baseConfig = frameworkConfig.container.get(BaseConfig);

    if (typeof config === 'function') {
        config(baseConfig);
    } else if (typeof config === 'object') {
        baseConfig.configure(config);
    }

}
