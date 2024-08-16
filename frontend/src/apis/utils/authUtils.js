import axiosInstance from '../utils/axiosInstance';
import { getCookie, setCookie } from './cookies';
import { getEmailFromToken } from './tokenUtils';

const signInApi = async (endpoint, credentials, setLoginErrorMsg) => {
    try {
        const response = await axiosInstance.post(endpoint, credentials);

        if (response.status === 200) {
            const { accessToken, refreshToken, userRole } = response.data;

            // AccessToken과 RefreshToken을 쿠키에 저장
            setCookie('accessToken', accessToken, {
                path: '/',
                maxAge: 7 * 24 * 60 * 60, // 7일 동안 유효
            });

            setCookie('refreshToken', refreshToken, {
                path: '/',
                maxAge: 7 * 24 * 60 * 60, // 7일 동안 유효
            });

            setLoginErrorMsg(''); // 로그인 성공하면 에러 메시지 초기화

            setCookie('userRole', userRole);

            return {
                success: true,
                data: response.data,
            };
        } else {
            return { success: false, message: 'Login failed' };
        }
    } catch (error) {
        setLoginErrorMsg(error.response.data.message);
        console.error('Login failed', error);
        return { success: false, message: error.toString() };
    }
};

const signUpApi = async (endpoint, userInfo, setJoinErrorMsg) => {
    try {
        const response = await axiosInstance.post(endpoint, userInfo);

        if (response) {

            setJoinErrorMsg('');

            return {
                success: true,
                data: response.data,
            };
        } else {
            return { success: false, message: 'Sign-up failed' };
        }
    } catch (error) {
        setJoinErrorMsg(error.response.data.message);
        console.error('Sign-up error:', error);
        return { success: false, message: error.toString() };
    }
};

const getUserInfoApi = async (endpoint) => {
    try {
        const response = await axiosInstance.get(endpoint);

        if (response.status === 200) {
            return {
                success: true,
                data: response.data,
            };
        } else {
            return { success: false, message: 'Get user info failed' };
        }
    } catch (error) {
        console.error('Get user info error:', error);
        return { success: false, message: error.toString() };
    }
}

const findNameByEmail = async (email, endpoint) => {
    const result = await getUserInfoApi(endpoint);

    if (result.success) {
        const user = result.data.data.find(user => user.email === email);
        return user ? user.name : 'Name not found';
    } else {
        return 'Error fetching data';
    }
};

export { signInApi, signUpApi, getUserInfoApi, findNameByEmail };
