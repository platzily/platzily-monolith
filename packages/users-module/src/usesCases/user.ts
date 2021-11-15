import { User, UserEntity } from "../dto/user";
import { BusinessError } from "../utils/BusinessError";
import { REGEX_EMAIL_PATTERN,errorTypes } from "../utils/constants";
import { logger } from "../utils/logger";

async function getUser(userModel:UserEntity,email:string): Promise<User>{

    if(!REGEX_EMAIL_PATTERN.test(email)){
        throw new BusinessError(errorTypes.EMAIL_NOT_VALID, 'users-module');
    }

    try {
        let user:User = await userModel.get(email);
        return user;
    } catch (error) {
        logger.error('[pl-user-module]: Error getting user from database: ', error.message);
        throw new BusinessError(errorTypes.READ_DATABASE_ERROR, 'users-module');
    }
}

export {
    getUser
}