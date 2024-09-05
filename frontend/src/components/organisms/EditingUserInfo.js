import React, { useEffect, useState } from 'react';
import { getCookie } from '../../apis/utils/cookies';
import { putUserInfo } from '../../apis/api/auth';

export default function EditingUserInfo() {
    const userId = getCookie('userId');
    const role = getCookie('userRole').toUpperCase();

    const [name, setName] = useState('Test');
    const [email, setEmail] = useState('Test');
    const [password, setPassword] = useState('Test');
    const [phone, setPhone] = useState('Test');
    const [customerCode, setCustomerCode] = useState('Test');
    const [customerName, setCustomerName] = useState('Test');
    const [department, setDept] = useState('SALES');

    const fetchPutUserInfo = async () => {
        try {
            let userData;
            if (role === 'CUSTOMER') {
                userData = {
                    name,
                    email,
                    password,
                    phone,
                    customerCode,
                    customerName,
                };
            } else {
                userData = {
                    name,
                    role,
                    email,
                    password,
                    phone,
                    department,
                };
            }

            const response = await putUserInfo(role, userId, userData);
            console.log(
                `${role === 'CUSTOMER' ? '고객사' : '담당자'} 정보 수정 성공`,
                response,
            );
        } catch (error) {
            console.error(
                `${role === 'CUSTOMER' ? '고객사' : '담당자'} 정보 수정 실패: `,
                error,
            );
        }
    };

    useEffect(() => {
        fetchPutUserInfo();
    }, []);

    return <div>수정할 때 보이는 컴포넌트</div>;
}

// 알람 기능에서 사용자를 찾는 방법 수정하기