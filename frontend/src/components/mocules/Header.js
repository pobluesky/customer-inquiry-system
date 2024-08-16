import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../atoms/Button';
import mainlogo from '../../assets/css/icons/mainlogo.svg';
import person from '../../assets/css/icons/person.svg';
import { Container, User } from '../../assets/css/Header.css';
import { useAuth } from '../../hooks/useAuth';
import { getCustomerInfo, getManagerInfo } from '../../apis/api/auth';
import NotificationModal from '../mocules/NotificationModal';

export const MenuLink = styled(Link)`
    color: #03507d;
    text-decoration: none;
`;

// [To do list] 로그인 권한 여부 확인 기능 추가
function Header({ inq, voc, dashboard }) {
    const navigate = useNavigate();
    const { didLogin, logout } = useAuth();
    const backgroundColor = didLogin ? '#EDFAFF' : '';
    const [username, setUsername] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const notificationButtonRef = useRef(null);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isJoinPage = location.pathname === '/join';

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const findUserName = async () => {
        try {
            const customer = await getCustomerInfo();
            setUsername(customer);

            if (customer === 'Name not found') {
                const manager = await getManagerInfo();
                setUsername(manager);
            }
            return username;
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (didLogin) {
            findUserName();
        }
    }, [didLogin]);

    return (
        <div>
        <div className={Container} style={{ backgroundColor }}>
            <div>
                <div></div>
                {/* 로그인 완료 */}
                <img src={mainlogo} alt="poscodx" />
                {didLogin ? (
                    <>
                        <div>
                            <MenuLink
                                to="/inq-main"
                                style={{
                                    color:
                                        inq && !voc && !dashboard
                                            ? '#03507d'
                                            : '#c1c1c1',
                                }}
                            >
                                Inquiry
                            </MenuLink>
                        </div>
                        <div>
                            <MenuLink
                                to="/voc-main"
                                style={{
                                    color:
                                        !inq && voc && !dashboard
                                            ? '#03507d'
                                            : '#c1c1c1',
                                }}
                            >
                                VoC
                            </MenuLink>
                        </div>
                        <div>
                            <MenuLink
                                to="/dashboard"
                                style={{
                                    color:
                                        !inq && !voc && dashboard
                                            ? '#03507d'
                                            : '#c1c1c1',
                                }}
                            >
                                DashBoard
                            </MenuLink>
                        </div>
                        <div className={User}>
                            <div><img src={person} alt="user" /></div>
                            <div>{username}님</div>
                        </div>
                        <div style={{
                            position: 'relative',
                            display: 'inline-block',
                        }}>
                            <Button
                                ref={notificationButtonRef}
                                onClick={toggleModal}
                                btnName={'알림'}
                                width={'40px'}
                                height={'40px'}
                                backgroundColor={'#ffffff'}
                                textColor={'#03507d'}
                                border={'solid #c1c1c1 1px'}
                                borderRadius={'12px'}
                                fontSize={'13px'}
                            />
                            {isModalOpen && (
                                <NotificationModal
                                    onClose={toggleModal}
                                />
                            )}
                        </div>
                        <div>
                            <Button
                                onClick={() => handleLogout()}
                                btnName={'로그아웃'}
                                width={'84px'}
                                height={'40px'}
                                backgroundColor={'#edfaff'}
                                textColor={'#c1c1c1'}
                                border={'solid #c1c1c1 1px'}
                                borderRadius={'12px'}
                                fontSize={'16px'}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <MenuLink to="/inq-main">Inquiry</MenuLink>
                        </div>
                        <div>
                            <MenuLink to="/voc-main">VoC</MenuLink>
                        </div>
                        <div>
                            <MenuLink to="/dashboard">DashBoard</MenuLink>
                        </div>
                        {/* 로그인 & 회원가입 버튼 */}
                        {!didLogin && !isLoginPage && (
                            <div>
                                <Button
                                    onClick={() => navigate('/login')}
                                    btnName={'로그인'}
                                    width={'84px'}
                                    height={'40px'}
                                    backgroundColor={'#03507d'}
                                    textColor={'#eeeeee'}
                                    border={'solid #c1c1c1 1px'}
                                    borderRadius={'12px'}
                                    fontSize={'16px'}
                                />
                            </div>
                        )}
                        {!didLogin && !isJoinPage && isLoginPage && (
                            <div>
                                <Button
                                    onClick={() => navigate('/join')}
                                    btnName={'회원가입'}
                                    width={'84px'}
                                    height={'40px'}
                                    backgroundColor={'#ffffff'}
                                    textColor={'#03507d'}
                                    border={'solid #c1c1c1 1px'}
                                    borderRadius={'12px'}
                                    fontSize={'16px'}
                                />
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
</div>
);
}

export default Header;
