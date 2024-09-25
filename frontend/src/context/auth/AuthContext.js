import React, { createContext, useState, useEffect } from 'react';
import { getCookie, removeCookie } from '../../apis/utils/cookies';
import { useRecoilState } from 'recoil';
import { userEmail, userPassword } from '../../index';
// import { getUserInfoByCustomers } from '../../apis/api/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [didLogin, setDidLogin] = useState(false);
    const [role, setRole] = useState(null);
    const [, setToken] = useState(null);
    const [userId, setUserId] = useState(null);

    const [, setGlobalEmail] = useRecoilState(userEmail);
    const [, setGlobalPassword] = useRecoilState(userPassword);

    useEffect(() => {
        // 페이지 새로고침 시 쿠키에서 토큰을 가져와 로그인 상태를 설정
        const token = getCookie('accessToken');
        const currentUserRole = getCookie('userRole');
        const currentUserId = getCookie('userId');

        if (token) {
            setToken(token);
            setDidLogin(true);
            setRole(currentUserRole);
            setUserId(currentUserId);
            return;
        }
    }, []);

    // 로그아웃 함수
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

        console.log('로그아웃 완료');
        console.log(getCookie('userRole'));
        console.log(getCookie('userId'));
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
