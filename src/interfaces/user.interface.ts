export interface User {
    id: number;
    username: string;
    password?: string;
    oldPassword?: string;
    email: string;
    name: string;
    lastname?: string;
}