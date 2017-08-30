import {Welcome} from '../../src/welcome/welcome';
import {UpperValueConverter} from '../../src/welcome/welcome';

describe('the Welcome module', () => {
    
    it('get fullname and deactivate', () => {
        let welcome = new Welcome();
        expect(welcome.fullName).toBe("John Doe");
        welcome.firstName = "Maha"
        welcome.lastName = "Singam"
        welcome.canDeactivate();
        expect(welcome.fullName).toBe("Maha Singam");        
        welcome.submit();
        welcome.canDeactivate(); 
    });
});

describe('the Uppercase converter helper', () => {
    
    it('helper function converts =', () => {
        let upperValueConverter = new UpperValueConverter();
        let convertValue = upperValueConverter.toView("Maha");
        expect(convertValue).toBe("MAHA");
    });

    it('helper function converts !=', () => {
        let upperValueConverter = new UpperValueConverter();
        let convertValue = upperValueConverter.toView("Maha");
        expect(convertValue).not.toBe("Maha");
    });

    it('helper function converts lovercase', () => {
        let upperValueConverter = new UpperValueConverter();
        let convertValue = upperValueConverter.toView("Maha");
        expect(convertValue).not.toBe("maha");
    });
});