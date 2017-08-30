import {Welcome} from '../../src/welcome/welcome';
import {UpperValueConverter} from '../../src/welcome/welcome';

describe('the Welcome module', () => {
    
    it('get fullname and deactivate', () => {
        let welcome = new Welcome();
        const alert = jest.spyOn(window, 'alert');
        const confirm = jest.spyOn(window, 'confirm');
        expect(welcome.fullName).toBe("John Doe");
        welcome.firstName = "Maha"
        welcome.lastName = "Singam"
        welcome.canDeactivate();
        expect(confirm).toHaveBeenCalledWith('Are you sure you want to leave?'); 
        expect(welcome.fullName).toBe("Maha Singam");        
        welcome.submit();
        expect(alert).toHaveBeenCalledWith('Welcome, Maha Singam!');
        welcome.canDeactivate();
        expect(confirm).toHaveBeenCalledWith('Are you sure you want to leave?');
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