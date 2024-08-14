import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot, atom, selector } from 'recoil';

// [Recoil] 고유 키 값으로 전역 변수 선언
export const authByRole = atom({
    key: 'authByRole', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});

// [Recoil] Selector로 변수 Get 호출
export const getAuthByRole = selector({
    key: 'getAuthByRole', // unique ID
    get: ({ get }) => {
        const value = get(authByRole);
        return value;
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </React.StrictMode>,
);
