import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/Button';
import Header from '../../components/mocules/Header';
import LoginInput from '../../components/mocules/LoginInput';
import { SignIn } from '../../assets/css/Auth.css';

import { signInApiByUsers } from '../../apis/api/auth';
import { getCookie } from '../../apis/utils/cookies';
import { useRecoilValue, useRecoilState } from 'recoil';
import { authByRole, getUserEmail, getUserPassword } from '../../index';

function Login() {
    const navigate = useNavigate();

    const currentUserEmail = useRecoilValue(getUserEmail); // selector로부터 계산된 값 읽기
    const currentUserPassword = useRecoilValue(getUserPassword); // selector로부터 계산된 값 읽기

    const [, setGlobalRole] = useRecoilState(authByRole); // 전역 역할을 수정하기 위한 state 선언

    const [email, setEmail] = useState(currentUserEmail);
    const [password, setPassword] = useState(currentUserPassword);

    const emailChange = (e) => setEmail(e.target.value);
    const passwordChange = (e) => setPassword(e.target.value);
    
    // 로그인 API
    const GetAuth = async () => {
        try {
            const response = await signInApiByUsers(email, password);
            console.log(`${response.data.userRole} 로그인 결과`, response.success);
            setGlobalRole(getCookie('userRole')); // 전역 역할 수정
            navigate('/');
        } catch (error) {
            console.error('로그인 실패:', error);
        }
    };
    
    return (
        <div>
            <Header
                user={true}
                login={false}
                inq={true}
                voc={true}
                dashboard={true}
            />
            <div className={SignIn}>
                <div>
                    <div>로그인</div>
                    <div>이메일과 비밀번호를 입력해주세요.</div>
                    {/* 이메일 & 비밀번호 입력 창 */}
                    <div>
                        {LoginInput({
                            value: email,
                            onChange: emailChange,
                            type: 'email',
                            placeholder: 'poscodx@posco.co.kr',
                            categoryName: '이메일',
                        })}
                    </div>
                    <div>
                        {LoginInput({
                            value: password,
                            onChange: passwordChange,
                            type: 'password',
                            placeholder: '********',
                            categoryName: '비밀번호',
                        })}
                    </div>
                    {/* 로그인 완료 버튼 */}
                    <div style={{ marginTop: '4vh' }}>
                        <Button
                            btnName={'로그인'}
                            width={'360px'}
                            height={'44px'}
                            backgroundColor={'#03507d'}
                            textColor={'#eeeeee'}
                            fontSize={'20px'}
                            border={'solid #c1c1c1 1px'}
                            borderRadius={'12px'}
                            onClick={async () => {
                                await GetAuth();
                            }}
                        />
                    </div>
                    {/* 회원가입 링크 */}
                    <div>
                        <a href="/join">회원이 아니신가요?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
