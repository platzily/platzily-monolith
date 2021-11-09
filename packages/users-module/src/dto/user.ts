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

export interface userModel {
    create(changes:createUserDTO): Promise<User>;
}

export interface createUserDTO extends Omit<User,
    'id' | 'description' | 'rol' | 'image' | 'is_active' | 'reason'
    > {}
