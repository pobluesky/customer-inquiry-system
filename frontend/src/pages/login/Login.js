import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/Button';
import LoginInput from '../../components/molecules/LoginInput';
import { SignIn } from '../../assets/css/Auth.css';
import { useAuth } from '../../hooks/useAuth';
import { getCookie } from '../../apis/utils/cookies';
import { useRecoilValue } from 'recoil';
import { getUserEmail, getUserPassword } from '../../index';
import { FailedAlert } from '../../utils/actions';
import { signInApiByUsers } from '../../apis/api/auth';

function Login() {
    const navigate = useNavigate();

    // 회원가입을 통해 유입된 사용자 정보: 회원가입 단계에서 저장
    const currentUserEmail = useRecoilValue(getUserEmail);
    const currentUserPassword = useRecoilValue(getUserPassword);

    const [email, setEmail] = useState(currentUserEmail);
    const [password, setPassword] = useState(currentUserPassword);

    const emailChange = (e) => setEmail(e.target.value);
    const passwordChange = (e) => setPassword(e.target.value);

    const [showFailedAlert, canShowFailedAlert] = useState(false);
    const [message, setMessage] = useState('');

    const [openBackDrop, setOpenBackDrop] = useState(false);

    const { didLogin, setDidLogin, setRole, setUserId } = useAuth();

    const enterKeyDown = async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            await GetAuth();
        }
    };

    // 로그인 API
    const GetAuth = async () => {
        try {
            await signInApiByUsers(email, password);
            setOpenBackDrop(true);
            setTimeout(() => {
                setDidLogin(true); // 로그인 상태 변화
                setUserId(getCookie('userId')); // 전역 userId 저장
                setRole(getCookie('userRole')); // 전역 역할 저장
                setOpenBackDrop(false);
                navigate('/');
            }, '2000');
        } catch (error) {
            setMessage(error.response.data.message);
            canShowFailedAlert(true);
            console.error('로그인 실패: ', error.response.data.message);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', enterKeyDown);
        return () => {
            window.removeEventListener('keydown', enterKeyDown);
        };
    }, [email, password]);

    useEffect(() => {
        const init = async () => {
            if (didLogin) {
                navigate('/');
            }
        };
        init();
    }, [didLogin]);

    useEffect(() => {
        localStorage.clear();
    }, []);

    return (
        <div>
            <div className={SignIn}>
                <div>
                    <div>로그인</div>
                    <div>이메일과 비밀번호를 입력해주세요.</div>
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
                    <div>
                        <FailedAlert
                            showAlert={showFailedAlert}
                            onClose={() => {
                                canShowFailedAlert(false);
                            }}
                            message={message}
                            inert
                        />
                        <a href="/join">회원이 아니신가요?</a>
                    </div>
                </div>
            </div>
            <Backdrop
                sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={openBackDrop}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}

export default Login;
