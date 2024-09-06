import React, { useEffect, useState } from 'react';
import UserInput from '../molecules/JoinInput';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { User_Account_Editing } from '../../assets/css/Auth.css';
import { getCookie } from '../../apis/utils/cookies';
import { putUserInfo } from '../../apis/api/auth';
import { useRecoilState } from 'recoil';
import { userEmail } from '../../index';
import {
    validateEmail,
    validatePhoneEdit,
    validateUserCode,
    validateCustomerName,
    validatePassword,
    validateMatch,
} from '../../utils/validation';

export default function EditingUserInfo({
    userDetail,
    completeEdit,
    setCompleteEdit,
    checkValidationTest,
    setValidationTest,
    tryEdit,
    setTryEdit,
}) {
    const navigate = useNavigate();
    const userId = getCookie('userId');
    const role = getCookie('userRole')?.toUpperCase();
    const { logout } = useAuth();

    const [email, setEmail] = useState(userDetail.email);
    const [phone, setPhone] = useState(userDetail.phone);
    const [customerCode, setCustomerCode] = useState(
        userDetail.customerCode || '',
    );
    const [customerName, setCustomerName] = useState(
        userDetail.customerName || '',
    );
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const [, setGlobalEmail] = useRecoilState(userEmail); // 로그인 창으로 전달할 이메일 값

    const enterKeyDown = async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setValidationTest(true);
            setTryEdit(!tryEdit);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', enterKeyDown);
        return () => {
            window.removeEventListener('keydown', enterKeyDown);
        };
    }, [completeEdit, checkValidationTest, tryEdit]);

    // 수정 완료 버튼을 눌렀을 때 사용자 입력값 검증
    useEffect(() => {
        if (checkValidationTest) {
            if (role === 'CUSTOMER') {
                if (
                    !validateEmail(email) &&
                    !validatePhoneEdit(phone) &&
                    !validateUserCode(customerCode) &&
                    !validateCustomerName(customerName) &&
                    !validatePassword(password) &&
                    !validateMatch(password, passwordCheck)
                ) {
                    setValidationTest(false);
                    setCompleteEdit(true);
                }
            } else {
                if (
                    !validateEmail(email) &&
                    !validatePhoneEdit(phone) &&
                    !validatePassword(password) &&
                    !validateMatch(password, passwordCheck)
                ) {
                    setValidationTest(false);
                    setCompleteEdit(true);
                }
            }
        }
    }, [
        checkValidationTest,
        // email,
        // phone,
        // customerCode,
        // customerName,
        // password,
        // passwordCheck,
        tryEdit,
    ]);

    useEffect(() => {
        if (completeEdit) {
            fetchPutUserInfo();
        }
    }, [completeEdit, tryEdit]);

    const fetchPutUserInfo = async () => {
        try {
            let userData;
            if (role === 'CUSTOMER') {
                userData = {
                    name: userDetail.name,
                    email,
                    password,
                    phone,
                    customerCode,
                    customerName,
                };
            } else {
                userData = {
                    name: userDetail.name,
                    role,
                    email,
                    password,
                    phone,
                };
            }

            const response = await putUserInfo(role, userId, userData);
            setGlobalEmail(response.data.email);
            alert('회원정보가 변경되어, 로그아웃됩니다.');
            logout();
            navigate('/login');
        } catch (error) {
            console.error(
                `${role === 'CUSTOMER' ? '고객사' : '담당자'} 정보 수정 실패: `,
                error,
            );
        }
    };

    useEffect(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    }, []);

    return (
        <div className={User_Account_Editing}>
            {role === 'customer' ? (
                <>
                    <div>
                        <UserInput
                            categoryName={'이름'}
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={userDetail.name}
                            readOnly={true}
                        />
                    </div>
                    <div>
                        <UserInput
                            categoryName={'이메일'}
                            type={'email'}
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            warningMsg={
                                checkValidationTest && validateEmail(email)
                            }
                        />
                    </div>
                    <div>
                        <UserInput
                            categoryName={'비밀번호'}
                            type={'password'}
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            warningMsg={
                                checkValidationTest &&
                                validatePassword(password)
                            }
                        />
                    </div>
                    <div>
                        <UserInput
                            categoryName={'비밀번호 확인'}
                            type={'password'}
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={passwordCheck}
                            onChange={(e) => setPasswordCheck(e.target.value)}
                            warningMsg={
                                checkValidationTest &&
                                validateMatch(password, passwordCheck)
                            }
                        />
                    </div>
                    <div>
                        <UserInput
                            categoryName={'전화번호'}
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            warningMsg={
                                checkValidationTest && validatePhoneEdit(phone)
                            }
                        />
                    </div>
                    <div>
                        <UserInput
                            categoryName={'고객 코드'}
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={customerCode}
                            onChange={(e) => setCustomerCode(e.target.value)}
                            warningMsg={
                                checkValidationTest &&
                                validateUserCode(customerCode)
                            }
                        />
                    </div>
                    <div>
                        <UserInput
                            categoryName={'고객사명'}
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            warningMsg={
                                checkValidationTest &&
                                validateCustomerName(customerName)
                            }
                        />
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <UserInput
                            categoryName={'이름'}
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={userDetail.name}
                            readOnly={true}
                        />
                    </div>
                    <div>
                        <UserInput
                            categoryName={'이메일'}
                            type={'email'}
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            warningMsg={
                                checkValidationTest && validateEmail(email)
                            }
                        />
                    </div>
                    <div>
                        <UserInput
                            categoryName={'비밀번호'}
                            type={'password'}
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            warningMsg={
                                checkValidationTest &&
                                validatePassword(password)
                            }
                        />
                    </div>
                    <div>
                        <UserInput
                            categoryName={'비밀번호 확인'}
                            type={'password'}
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={passwordCheck}
                            onChange={(e) => setPasswordCheck(e.target.value)}
                            warningMsg={
                                checkValidationTest &&
                                validateMatch(password, passwordCheck)
                            }
                        />
                    </div>
                    <div>
                        <UserInput
                            categoryName={'전화번호'}
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            warningMsg={
                                checkValidationTest && validatePhoneEdit(phone)
                            }
                        />
                    </div>
                </>
            )}
        </div>
    );
}
