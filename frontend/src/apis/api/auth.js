import {
    findNameByEmail,
    getUserInfoApi,
    signInApi,
    signUpApi,
} from '../utils/authUtils';
import { getCookie } from '../utils/cookies';
import { getEmailFromToken } from '../utils/tokenUtils';

// 고객사 회원가입
export const signUpApiByCustomers = (name, email, password, phone, customerCode, customerName, setJoinErrorMsg) => {
    return signUpApi('/customers/sign-up', { name, email, password, phone, customerCode, customerName }, setJoinErrorMsg);
};

// 담당자 회원가입
export const signUpApiByManagers = (name, email, password, phone, empNo, role, department, setJoinErrorMsg) => {
    return signUpApi('/managers/sign-up', { name, email, password, phone, empNo, role, department }, setJoinErrorMsg);
};

// 로그인
export const signInApiByUsers = (email, password, setLoginErrorMsg) => {
    return signInApi('/users/sign-in', { email, password }, setLoginErrorMsg);
};

// 고객사 이름 조회 ByEmail
export const getCustomerInfo = () => {
    const token = getCookie('accessToken');
    const email = getEmailFromToken(token);
    return findNameByEmail(email, '/customers');
};

// 담당자 이름 조회 ByEmail
export const getManagerInfo = () => {
    const token = getCookie('accessToken');
    const email = getEmailFromToken(token);
    return findNameByEmail(email, '/managers');
};

// 고객사 정보 조회
export const getUserInfoByCustomers = (userId) => {
    return getUserInfoApi(`/customers/${userId}`);
};

// 담당자 정보 조회
export const getUserInfoByManagers = (userId) => {
    return getUserInfoApi(`/managers/${userId}`);
};