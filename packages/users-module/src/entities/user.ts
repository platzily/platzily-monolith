import { UserEntity, User } from "../dto/user";
import { postgreSQLConnection } from "../repositories/postgreSQL/dbClient";
import { USER_TABLE } from "../utils/constants";

async function get(email:any): Promise<User> {

    const user:User = await postgreSQLConnection(USER_TABLE).select('id','firstname','lastname','description','email','rol','image','is_active','reason').where('email', email);
    return user;
};

export const modelUser = (): UserEntity => {
    return {
        get
    }
}