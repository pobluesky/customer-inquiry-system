import axios from 'axios';
import BASE_URL from '../config/constants';
import { getCookie, removeCookie, setCookie } from './cookies';
import { getRoleFromCookie } from './tokenUtils';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
    (config) => {
      const accessToken = getCookie('accessToken');
      if (accessToken) {
        config.headers.Authorization = `${accessToken}`;
      }
      // console.log("[axiosInstance] interceptors request: ", config.headers);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    // 응답이 성공적일 때
    (response) => {
      if (response && response.data) {
        const accessToken = getCookie('accessToken');

        if (accessToken) {
          const role = getRoleFromCookie();
          // console.log("[axiosInstance] interceptor response: ", { ...response, role });
          return { ...response, role };
        }
      }
      return response.data;
    },

    // 토큰이 유효하지 않을 경우
    async (error) => {
      const statusCode = error.response?.status;
      if (statusCode === 401 || statusCode === 403) {
        try {
          const refreshToken = getCookie('refreshToken');
          if (!refreshToken) {
            removeCookie('accessToken');
            return Promise.reject(error);
          }

          const userRole = getRoleFromCookie();

          const refreshUrl = userRole === 'CUSTOMER'
              ? '/customers/sign-in'
              : '/managers/sign-in';

          const refreshResponse = await axios.post(
              refreshUrl,
              null,
              {
                params: {
                  accountId: '1', // 필요에 따라 조정
                  token: refreshToken,
                },
                headers: {
                  Authorization: `${refreshToken}`,
                },
              }
          );

          const newAccessToken = refreshResponse.data.result.accessToken;
          setCookie('accessToken', newAccessToken, {
            path: '/',
          });
          setCookie('refreshToken', refreshResponse.data.result.refreshToken, {
            path: '/',
          });

          error.config.headers.Authorization = `${newAccessToken}`;

          const newRole = getRoleFromCookie(newAccessToken);

          const updatedResponse = await axios(error.config);

          return { ...updatedResponse, userRole: newRole };
        } catch (err) {
          removeCookie('accessToken');
          removeCookie('refreshToken');
          return Promise.reject(err);
        }
      }
      return Promise.reject(error);
    }
);


export default axiosInstance;