import { UserEntity, User } from "../dto/user";

async function get(email:any): Promise<User> {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

          resolve({
            id: 1,
            firstname: 'MockName',
            lastname: 'MockLastName',
            description: 'MockDescription',
            email: email,
            rol: "None",
            image:  "MockReason.png",
            is_active: true,
            reason: "MockReason",
          });

        }, 300);
    });
};

export const modelUser = (): UserEntity => {
    return {
        get
    }
}