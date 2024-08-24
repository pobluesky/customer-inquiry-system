import {Cookies} from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const removeCookie = (name, options = {}) => {
  const defaultOptions = { path: '/' };

  const mergedOptions = { ...defaultOptions, ...options };

  return cookies.remove(name, mergedOptions);
};

// 쿠키에서 역할을 추출하는 함수
export const getRoleFromCookie = () => {
  return getCookie('userRole');
};