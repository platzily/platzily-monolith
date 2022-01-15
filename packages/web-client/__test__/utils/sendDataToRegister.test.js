import { sendDataToRegister } from '../../utils/sendDataToRegister';

describe('sendDataToRegister function', () => {
    it('The function has match with the credentials', () => {
        return sendDataToRegister('Sergio', 'Sanhueza','sergio@gmail.com', 'awdkwkdkaw').then(data => {
            expect(data).toEqual({
                name: "Sergio",
                lastName:'Sanhueza',
                email: 'sergio@gmail.com',
                status: "200",
                id: "1",
                error: false
            });
        });
    });
    
    it(`The function sends a previously registered email`, () => {
        return sendDataToRegister('fake_name', 'fake_lastname', 'any@gmail.com', 'awdkwkdkaw').then(data => {
            expect(data).toEqual({
                name: "fake_name",
                lastName:"fake_lastname",
                email: 'any@gmail.com',
                status: "401",
                id: "1",
                error: true
            });
        });
    });

});

