import {User, userModel,createUserDTO} from "../dto/user";

export const createOneUser = (model:userModel) => async (user:createUserDTO) =>  {
    try {
        let userCreated:User= await model.create(user)
        return userCreated
    }catch (e) {
        console.log(e)
    }
}
