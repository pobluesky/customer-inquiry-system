import React, { createContext, useState, useEffect } from 'react';
import { getCookie, removeCookie } from '../../apis/utils/cookies';
import { useRecoilState } from 'recoil';
import { userEmail, userPassword } from '../../index';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [didLogin, setDidLogin] = useState(false);
    const [role, setRole] = useState(null);
    const [, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [isInitiated, setIsInitiated] = useState(false);

    const [, setGlobalEmail] = useRecoilState(userEmail);
    const [, setGlobalPassword] = useRecoilState(userPassword);

    useEffect(() => {
        const token = getCookie('accessToken');
        const currentUserRole = getCookie('userRole');
        const currentUserId = getCookie('userId');

        if (token) {
            setToken(token);
            setDidLogin(true);
            setRole(currentUserRole);
            setUserId(currentUserId);
            setIsInitiated(true);
            return;
        }

    }, []);

    useEffect(() => {
        if (isInitiated && !didLogin) {
            removeCookie('userName');
            removeCookie('userRole');
            removeCookie('userId');
        }
    }, [didLogin, isInitiated]);

    const logout = () => {
        removeCookie('accessToken', { path: '/' });
        removeCookie('refreshToken', { path: '/' });
        removeCookie('userName', { path: '/' });
        removeCookie('userRole', { path: '/' });
        removeCookie('userId', { path: '/' });

        setRole(null);
        setToken(null);
        setUserId(null);

        setGlobalEmail('');
        setGlobalPassword('');

        setDidLogin(false);

        localStorage.clear();
        sessionStorage.clear();
    };

    return (
        <AuthContext.Provider
            value={{
                didLogin,
                role,
                logout,
                setDidLogin,
                setRole,
                userId,
                setUserId,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
