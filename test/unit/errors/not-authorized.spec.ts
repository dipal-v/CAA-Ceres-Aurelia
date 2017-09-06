import {NotAuthorized} from '../../../src/errors/not-authorized';

describe('not authorized error', () => {
    
    it('check the class load', () => {
        let notAuthorized = new NotAuthorized();
        let title = 'Error: Not Authorized';
        let message = 'You are not authorized to either view the page you navigated to, or perform the function you attempted. Please return to the previous screen.';
        expect(notAuthorized.title).toEqual(title);
        expect(notAuthorized.message).toEqual(message);
    });
});