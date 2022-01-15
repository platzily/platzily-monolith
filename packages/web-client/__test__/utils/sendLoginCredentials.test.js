import { sendLoginWithCredentials } from '../../utils/sendLoginCredentials';

describe('sendLoginWithCredentials function', () => {
    it('The function has match with the credentials', () => {
        return sendLoginWithCredentials('sergio@gmail.com', 'awdkwkdkaw').then(data => {
            expect(data).toEqual({
                email: 'sergio@gmail.com',
                status: "200",
                id: "1",
                name: "userNameTest",
                error: false
            });
        });
    });
    
    it(`The function DON'T has match with the credentials`, () => {
        return sendLoginWithCredentials('any@gmail.com', 'awdkwkdkaw').then(data => {
            expect(data).toEqual({
                email: 'any@gmail.com',
                status: "401",
                id: "1",
                name: "userNameTest",
                error: true
            });
        });
    });

});

