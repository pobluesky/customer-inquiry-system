import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/Button';
import Header from '../../components/mocules/Header';
import LoginInput from '../../components/mocules/LoginInput';
import { SignIn } from '../../assets/css/Auth.css';
import { signInApiByUsers } from '../../apis/api/auth';
import { getCookie } from '../../apis/utils/cookies';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
    authByRole,
    userEmail,
    userPassword,
    loginErrorMsg,
    getUserEmail,
    getUserPassword,
    getLoginErrorMsg,
} from '../../index';
import { LoginCompleteAlert, LoginFailedAlert } from '../../utils/actions';

function Login() {
    const navigate = useNavigate();

    const [, setGlobalRole] = useRecoilState(authByRole);

    // 회원가입을 통해 유입된 사용자 정보: 회원가입 단계에서 저장
    const currentUserEmail = useRecoilValue(getUserEmail);
    const currentUserPassword = useRecoilValue(getUserPassword);
    const [email, setEmail] = useState(currentUserEmail);
    const [password, setPassword] = useState(currentUserPassword);

    // 기존 사용자 정보: 로그인 단계에서 저장
    const [, setGlobalEmail] = useRecoilState(userEmail);
    const [, setGlobalPassword] = useRecoilState(userPassword);

    const emailChange = (e) => setEmail(e.target.value);
    const passwordChange = (e) => setPassword(e.target.value);

    const [didLogin, tryLogin] = useState(false);
    const [showAlert, canShowAlert] = useState(false);
    const [, setLoginErrorMsg] = useRecoilState(loginErrorMsg);
    const currentLoginErrorMsg = useRecoilValue(getLoginErrorMsg);

    useEffect(() => {
        if (currentLoginErrorMsg) {
            canShowAlert(true);
        }
    }, [didLogin]);

    // [로그인 성공] 메인 페이지로 이동
    const goToMain = (result) => {
        if (result.success) {
            setGlobalRole(getCookie('userRole')); // 전역 역할 수정
            setGlobalEmail(email);
            setGlobalPassword(password);
            LoginCompleteAlert();
            setTimeout(() => {
                navigate('/');
            }, '3000');
            return;
        }
        tryLogin(!didLogin);
    };

    // 로그인 API
    const GetAuth = async () => {
        try {
            const result = await signInApiByUsers(
                email,
                password,
                setLoginErrorMsg,
            );
            goToMain(result);
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
                        <LoginFailedAlert
                            showAlert={showAlert}
                            onClose={() => {
                                canShowAlert(false);
                            }}
                            message={currentLoginErrorMsg}
                        />
                        <a href="/join">회원이 아니신가요?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
