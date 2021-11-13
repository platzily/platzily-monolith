import {modelUser} from "./entities/user";
import {createOneUser} from "./usesCases/user";

module.exports = {
    createUser: createOneUser(modelUser()),
}
