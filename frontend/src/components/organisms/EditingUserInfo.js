import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../atoms/Input';
import { getCookie } from '../../apis/utils/cookies';
import { useAuth } from '../../hooks/useAuth';
import { User_Account_Editing } from '../../assets/css/Auth.css';
import { putUserInfo } from '../../apis/api/auth';

export default function EditingUserInfo({ userDetail, completeEdit }) {
    const navigate = useNavigate();
    const userId = getCookie('userId');
    const role = getCookie('userRole').toUpperCase();
    const { logout } = useAuth();

    const [name, setName] = useState(userDetail.name);
    const [email, setEmail] = useState(userDetail.email);
    const [password, setPassword] = useState(userDetail.password);
    const [phone, setPhone] = useState(userDetail.phone);
    const [customerCode, setCustomerCode] = useState(
        userDetail.customerCode || '',
    );
    const [customerName, setCustomerName] = useState(
        userDetail.customerName || '',
    );

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
                };
            }

            const response = await putUserInfo(role, userId, userData);
            console.log(
                `${role === 'CUSTOMER' ? '고객사' : '담당자'} 정보 수정 성공`,
                response,
            );
            // [To Do] undefined 해결
            setTimeout(() => {
                logout();
                navigate('/login');
            }, 2000);
        } catch (error) {
            console.error(
                `${role === 'CUSTOMER' ? '고객사' : '담당자'} 정보 수정 실패: `,
                error,
            );
        }
    };

    useEffect(() => {
        if (completeEdit) {
            fetchPutUserInfo();
        }
    }, [completeEdit]);

    return (
        <div className={User_Account_Editing}>
            {role === 'customer' ? (
                <>
                    <div>
                        <div>이름</div>
                        <Input
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <div>이메일</div>
                        <Input
                            type={'email'}
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <div>비밀번호</div>
                        <Input
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <div>전화번호</div>
                        <Input
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div>
                        <div>고객 코드</div>
                        <Input
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={customerCode}
                            onChange={(e) => setCustomerCode(e.target.value)}
                        />
                    </div>
                    <div>
                        <div>고객사명</div>
                        <Input
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                        />
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <div>이름</div>
                        <Input
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <div>이메일</div>
                        <Input
                            type={'email'}
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <div>비밀번호</div>
                        <Input
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <div>전화번호</div>
                        <Input
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </>
            )}
        </div>
    );
}
