import { jwtDecode } from 'jwt-decode';
import { getCookie } from './cookies';

// JWT 디코드 및 역할 추출 함수
export const getRoleFromToken = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    // console.log("[tokenUtils-getRoleFromToken]: ", decodedToken.role);
    return decodedToken.role || null;
  } catch (error) {
    console.error('Invalid token', error);
    return null;
  }
};

// 쿠키에서 액세스 토큰을 가져와 역할을 추출하는 함수
export const getRoleFromCookie = () => {
  const token = getCookie('accessToken');
  // console.log("[tokenUtils-getRoleFromCookie]: ", getRoleFromToken(token));
  return token ? getRoleFromToken(token) : null;
};
