import React, { createContext, useState, useEffect } from 'react';
import { getCookie, removeCookie } from '../../apis/utils/cookies';
import { useRecoilState } from 'recoil';
import { userEmail, userPassword, joinErrorMsg, loginErrorMsg } from '../../index';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [didLogin, setDidLogin] = useState(false);
    const [role, setRole] = useState(null);
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);

    const [, setGlobalEmail] = useRecoilState(userEmail);
    const [, setGlobalPassword] = useRecoilState(userPassword);
    const [, setJoinErrorMsg] = useRecoilState(joinErrorMsg);
    const [, setLoginErrorMsg] = useRecoilState(loginErrorMsg);

    useEffect(() => {
        // 페이지 새로고침 시 쿠키에서 토큰을 가져와 로그인 상태를 설정
        const token = getCookie('accessToken');
        const currentUserRole = getCookie('userRole');
        const currentUserId = getCookie('userId');

        if (token) {
            console.log("AuthContext: ", currentUserId);
            console.log("AuthContext: ", currentUserRole);
            setToken(token);
            setDidLogin(true);
            setRole(currentUserRole);
            setUserId(currentUserId);
            return;
        }
    }, []);

    // 로그아웃 함수
    const logout = () => {
        removeCookie('accessToken');
        removeCookie('userRole');
        removeCookie('userId');

        setDidLogin(false);
        setRole(null);
        setToken(null);
        setUserId(null);

        setGlobalEmail('');
        setGlobalPassword('');
        setLoginErrorMsg('');
        setJoinErrorMsg('');

        console.log("로그아웃!");
        console.log(getCookie('userRole'))
        console.log(getCookie('userId'))

        if(getCookie('userId') || getCookie('userRole')) {
            removeCookie('accessToken');
            removeCookie('userRole');
            removeCookie('userId');
        }
    };

    console.log("현재 로그인 상태: ", didLogin);
    console.log("현재 유저의 role: ", role);
    console.log("현재 유저의 userId: ", userId);

    return (
        <AuthContext.Provider value={{ didLogin, role, logout, setDidLogin, setRole, userId, setUserId }}>
            {children}
        </AuthContext.Provider>
    );
};
