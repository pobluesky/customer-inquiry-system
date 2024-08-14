import { signInApi, signUpApi } from '../utils/authUtils';

// 고객사 & 담당자 로그인
export const signInApiByUser = (email, password) => {
    return signInApi('/users/sign-in', { email, password });
};

// 고객사 회원가입
export const signUpApiByCustomers = (
    name,
    email,
    password,
    phone,
    customerCode,
    customerName,
) => {
    return signUpApi('/customers/sign-up', {
        name,
        email,
        password,
        phone,
        customerCode,
        customerName,
    });
};

// 담당자 회원가입
export const signUpApiByManagers = (
    name,
    email,
    password,
    phone,
    empNo,
    role,
    department,
) => {
    return signUpApi('/managers/sign-up', {
        name,
        email,
        password,
        phone,
        empNo,
        role,
        department,
    });
};
