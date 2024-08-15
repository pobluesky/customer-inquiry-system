import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../atoms/Button';
import mainlogo from '../../assets/css/icons/mainlogo.svg';
import person from '../../assets/css/icons/person.svg';
import { Container } from '../../assets/css/Header.css';
import { useAuth } from '../../hooks/useAuth';
import { getCustomerInfo, getManagerInfo } from '../../apis/api/auth';

export const MenuLink = styled(Link)`
    color: #03507d;
    text-decoration: none;
`;

// [To do list] 로그인 권한 여부 확인 기능 추가
function Header({ inq, voc, dashboard }) {
    const navigate = useNavigate();
    const { isLoggedIn, logout } = useAuth();
    const backgroundColor = isLoggedIn ? '#EDFAFF' : '';
    const [username, setUsername] = useState(null);

    const handleLogout = () => {
        logout();          // 로그아웃 실행
        navigate('/login'); // 로그아웃 후 로그인 페이지로 이동
    };

    const findUserName = async () => {
        try {
            const customer = await getCustomerInfo();
            setUsername(customer);

            if (customer === null) {
                const manager = await getManagerInfo();
                setUsername(manager);
            }
            return username;
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (isLoggedIn) {
            findUserName();
        }
    }, [isLoggedIn]);

    return (
        <div className={Container} style={{ backgroundColor }}>
            <div>
                <div></div>
                {/* 로그인 완료 */}
                <img src={mainlogo} alt="poscodx" />
                {isLoggedIn ? (
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
                        <div>
                            <img src={person} alt="user" />
                        </div>
                        {username}
                        <div>
                            <Button
                                onClick={() => handleLogout()}
                                btnName={'로그아웃'}
                                width={'84px'}
                                height={'40px'}
                                backgroundColor={'#03507d'}
                                textColor={'#eeeeee'}
                                border={'solid #c1c1c1 1px'}
                                borderRadius={'12px'}
                                fontSize={'16px'}
                            />
                        </div>
                        {/* <div>포청천님</div> */}
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
                        {isLoggedIn ? (
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
                        ) : (
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
    );
}

export default Header;
