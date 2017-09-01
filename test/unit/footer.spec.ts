import {Footer} from '../../src/components/footer';

describe('footer component', () => {
    
    it('check the class load', () => {
        let footer = new Footer();
        footer.ScrollToTop();
        footer.attached();
        footer.detached();
    });
});