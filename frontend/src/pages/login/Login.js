import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/Button';
import LoginInput from '../../components/mocules/LoginInput';
import { SignIn } from '../../assets/css/Auth.css';
import { useAuth } from '../../hooks/useAuth';
import { getCookie } from '../../apis/utils/cookies';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userEmail, userPassword, loginErrorMsg } from '../../index';
import { getUserEmail, getUserPassword, getLoginErrorMsg } from '../../index';
import { LoginCompleteAlert, LoginFailedAlert } from '../../utils/actions';
import { signInApiByUsers } from '../../apis/api/auth';

function Login() {
    const navigate = useNavigate();

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

    const [, setLoginErrorMsg] = useRecoilState(loginErrorMsg);
    const currentLoginErrorMsg = useRecoilValue(getLoginErrorMsg);
    const [tryLogin, setTryLogin] = useState(false);
    const [showAlert, canShowAlert] = useState(false);
    const [resetAtom, setResetAtom] = useState(false);

    const { didLogin, setDidLogin, setRole, setUserId } = useAuth();

    // 엔터 키 기능 (로그인 버튼 클릭)
    const enterKeyDown = async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            await GetAuth();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', enterKeyDown);
        return () => {
            window.removeEventListener('keydown', enterKeyDown);
        };
    }, [tryLogin, email, password]);

    // 로그인 실패: 새로고침 시 경고 메시지 초기화
    useEffect(() => {
        if (!didLogin) {
            setGlobalEmail('');
            setGlobalPassword('');
            setLoginErrorMsg('');
        }
        setResetAtom(true);
    }, [didLogin]);

    useEffect(() => {
        if (resetAtom && !didLogin && currentLoginErrorMsg) {
            canShowAlert(true);
        }
    }, [resetAtom, tryLogin, didLogin]);

    // 로그인 성공: 메인 페이지로 이동
    const goToMain = (result) => {
        if (result.success) {
            setDidLogin(true); // 로그인 상태 변화
            setUserId(getCookie('userId')); // 전역 userId 저장
            setRole(getCookie('userRole')); // 전역 역할 저장
            setGlobalEmail(email); // 이메일 저장
            LoginCompleteAlert();
            setTimeout(() => {
                navigate('/');
            }, '2000');
            return;
        }
        setTryLogin(!tryLogin);
    };

    // 로그인 API
    const GetAuth = async () => {
        try {
            const result = await signInApiByUsers(
                email,
                password,
                setLoginErrorMsg,
            );
            console.log('로그인 결과', result.success);
            goToMain(result);
        } catch (error) {
            console.error('로그인 실패', error);
        }
    };

    return (
        <div>
            <div className={SignIn}>
                <div>
                    <div>로그인</div>
                    <div>이메일과 비밀번호를 입력해주세요.</div>
                    {/* 이메일 & 비밀번호 입력 창 */}
                    <div>
                        <LoginInput
                            value={email}
                            onChange={emailChange}
                            type={'email'}
                            placeholder={'poscodx@posco.co.kr'}
                            categoryName={'이메일'}
                        />
                    </div>
                    <div>
                        <LoginInput
                            value={password}
                            onChange={passwordChange}
                            type={'password'}
                            placeholder={'********'}
                            categoryName={'비밀번호'}
                        />
                    </div>
                    {/* 로그인 완료 버튼 */}
                    <div>
                        <Button
                            btnName={'로그인'}
                            width={'360px'}
                            height={'44px'}
                            margin={'4vh 0 0 0'}
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
