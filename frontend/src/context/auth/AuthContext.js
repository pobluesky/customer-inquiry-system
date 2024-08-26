import React, { createContext, useState, useEffect } from 'react';
import { getCookie, removeCookie } from '../../apis/utils/cookies';
import { useRecoilState } from 'recoil';
import { userEmail, userPassword, joinErrorMsg, loginErrorMsg } from '../../index';
import { getUserInfoByCustomers } from '../../apis/api/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [didLogin, setDidLogin] = useState(false);
    const [role, setRole] = useState(null);
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState(null);

    const [, setGlobalEmail] = useRecoilState(userEmail);
    const [, setGlobalPassword] = useRecoilState(userPassword);
    const [, setJoinErrorMsg] = useRecoilState(joinErrorMsg);
    const [, setLoginErrorMsg] = useRecoilState(loginErrorMsg);

    const getUserInfo = async () => {
        try {
            const response = await getUserInfoByCustomers(getCookie('userId'));
            setUserName(response.data.data.name);
            return response.data.data.name;
        } catch (error) {
            console.log('Error fetching UserName:', error);
        }
    }
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

    useEffect(() => {
        getUserInfo()
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
        setUserName(null);

        setGlobalEmail('');
        setGlobalPassword('');
        setLoginErrorMsg('');
        setJoinErrorMsg('');

        console.log("로그아웃!");
        console.log(getCookie('userRole'))
        console.log(getCookie('userId'))
    };

    console.log("현재 로그인 상태: ", didLogin);
    console.log("현재 유저의 role: ", role);
    console.log("현재 유저의 userId: ", userId);
    console.log("현재 유저의 name: ", userName);

    return (
        <AuthContext.Provider value={{ didLogin, role, logout, setDidLogin, setRole, userId, setUserId, userName, setUserName }}>
            {children}
        </AuthContext.Provider>
    );
};
