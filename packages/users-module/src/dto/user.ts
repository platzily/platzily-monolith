export interface User {
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

export interface UserEntity {
    get(email: any) : Promise<User>;
}