import React, { createContext, useState, useEffect } from 'react';
import { getCookie, removeCookie } from '../../apis/utils/cookies';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        // 페이지 새로고침 시 쿠키에서 토큰을 가져와 로그인 상태를 설정
        const token = getCookie('accessToken');
        const currentUserRole = getCookie('userRole');

        if (token) {
            setToken(token);
            setIsLoggedIn(true);
            setRole(currentUserRole);
        }
    }, []);

    // 로그아웃 함수
    const logout = () => {
        removeCookie('accessToken');
        removeCookie('userRole');
        setIsLoggedIn(false);
        setRole(null);
        setToken(null);
    };

    console.log("현재 로그인 상태: ", isLoggedIn);
    console.log("현재 유저의 role: ", role);

    return (
        <AuthContext.Provider value={{ isLoggedIn, role, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
