import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/Button';
import { useAuth } from '../../hooks/useAuth';
import { Modal_Container } from '../../assets/css/MyHeader.css';

// 로그아웃 버튼, 회원 정보 탐색 기능
function UserInfoModal() {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className={Modal_Container}>
            <div>
                <div>
                    <Button
                        onClick={() => {
                            alert('내 정보 페이지 구현 중');
                        }}
                        btnName={'내 정보'}
                        width={'100%'}
                        height={'40px'}
                        backgroundColor={'#ffffff'}
                        textColor={'#64636A'}
                        border={'solid #c1c1c1 1px'}
                        borderRadius={'12px'}
                        fontSize={'16px'}
                    />
                </div>
                <div>
                    <Button
                        onClick={() => handleLogout()}
                        btnName={'로그아웃'}
                        width={'100%'}
                        height={'40px'}
                            backgroundColor={'#ffffff'}
                        textColor={'#64636A'}
                        border={'solid #c1c1c1 1px'}
                        borderRadius={'12px'}
                        fontSize={'16px'}
                    />
                </div>
            </div>
        </div>
    );
}

export default UserInfoModal;
