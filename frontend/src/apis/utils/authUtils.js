import axiosInstance from '../utils/axiosInstance';
import {setCookie} from './cookies';

const signInApi = async (endpoint, credentials) => {
  try {
    const response = await axiosInstance.post(endpoint, credentials);

    if (response.status === 200) {
      const { accessToken, refreshToken } = response.data;

      // AccessToken과 RefreshToken을 쿠키에 저장
      setCookie('accessToken', accessToken, {
        path: '/',
        maxAge: 7 * 24 * 60 * 60, // 7일 동안 유효
      });

      setCookie('refreshToken', refreshToken, {
        path: '/',
        maxAge: 7 * 24 * 60 * 60, // 7일 동안 유효
      });

      return {
        success: true,
        data: response.data
      };

    } else {
      return { success: false, message: "Login failed" };
    }
  } catch (error) {
    console.error("Login failed", error);
    return { success: false, message: error.toString() };
  }
};

const signUpApi = async (endpoint, userInfo) => {
  try {
    const response = await axiosInstance.post(endpoint, userInfo);

    if (response) {
      return {
        success: true,
        data: response.data
      };

    } else {
      return { success: false, message: "Sign-up failed" };
    }
  } catch (error) {
    console.error("Sign-up error:", error);
    return { success: false, message: error.toString() };
  }
};

export { signInApi, signUpApi };
