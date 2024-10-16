import { User } from './user.interface';

export interface AuthContextType {
    userObj: User | null;
    login: (user: User) => void;
    logout: () => void;
}