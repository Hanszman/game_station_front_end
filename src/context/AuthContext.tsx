import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../interfaces/user.interface';
import { AuthContextType } from '../interfaces/auth-context.interface';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [userObj, setUserObj] = useState<User | null>(null);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUserObj(JSON.parse(user));
        }
    }, []);

    const login = (user: User) => {
        localStorage.setItem('user', JSON.stringify(user));
        setUserObj(user);
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUserObj(null);
    };

    return (
        <AuthContext.Provider value={{ userObj, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};