import {LeftHandMenu} from '../../src/components/left-hand-menu';

describe('footer component', () => {
    
    it('check the class load', () => {
        let leftHandMenu = new LeftHandMenu();
        leftHandMenu.attached();
        leftHandMenu.detached();
        leftHandMenu.ScrollToTop();
    });
});