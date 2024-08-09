import axios from 'axios';
import BASE_URL from '../config/constants';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 추가
axiosInstance.interceptors.request.use(
    config => {
      // 요청 전에 수행할 작업 (token)
      return config;
    },
    error => {
      return Promise.reject(error);
    }
);

// 응답 인터셉터 추가
axiosInstance.interceptors.response.use(
    response => {
      // 응답 데이터 전에 수행할 작업 (token)
      return response;
    },
    error => {
      // 오류 처리
      return Promise.reject(error);
    }
);

export default axiosInstance;
