import {User, userModel,createUserDTO} from "../dto/user";
import {dbConnection} from "mariadb-connection-module";
import {USER_TABLE} from "../utils/constants"

export const modelUser= () :userModel => {
  return {
      create
  }
}

async function create(user:createUserDTO) {
    let result:User = await dbConnection(USER_TABLE).insert(user);
    return result
}

