import { signInApi, signUpApi } from '../utils/authUtils';

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
