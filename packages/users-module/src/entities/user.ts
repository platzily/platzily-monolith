import { UserDTO } from "../dto/user";

export class User {
    id: number;
    firstname: string;
    lastname: string;
    description: string;
    email: string;
    rol: string;
    image: string;
    is_active: boolean;
    reason: string;
}