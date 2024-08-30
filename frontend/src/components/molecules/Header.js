import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../atoms/Button';
import mainlogo from '../../assets/css/icons/mainlogo.svg';
import profile from '../../assets/css/icons/profile.svg';
import { Container, Container_Nav } from '../../assets/css/Header.css';
import { getUserName, userName } from '../../index';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useAuth } from '../../hooks/useAuth';
import {
    getUserInfoByCustomers,
    getUserInfoByManagers,
} from '../../apis/api/auth';
import NotificationModal from '../molecules/NotificationModal';

export const MenuLink = styled(Link)`
    color: #03507d;
    text-decoration: none;
`;

function Header({ inq, voc, dashboard }) {
    const navigate = useNavigate();
    const { didLogin, userId, role } = useAuth();

    const url = `/inq-list/${role?.toLowerCase()}`;

    const columns = didLogin
        ? '45px 340px 170px 144px 150px 150px 44px 166px 55px'
        : '45px 340px 170px 144px 150px 150px';

    const backgroundColor = didLogin ? '#EDFAFF' : '';
    const [name, setName] = useState(null);
    const [, setGlobalName] = useRecoilState(userName);
    const currentUserName = useRecoilValue(getUserName);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openNav, setOpenNav] = useState(false);
    const navRef = useRef(null);
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
            if (role === 'CUSTOMER') {
                const customer = await getUserInfoByCustomers(userId);
                setName(customer.data.data.name);
                setGlobalName(customer.data.data.name);
            } else {
                const manager = await getUserInfoByManagers(userId);
                setName(manager.data.data.name);
                setGlobalName(manager.data.data.name);
            }
            return name;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (didLogin && userId) {
            findUserName();
        }
    }, [didLogin, userId, role]);

    // 바깥 영역 클릭 시 nav 닫기
    useEffect(() => {
        const clickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setOpenNav(false);
            }
        };

        document.addEventListener('mouseup', clickOutside);
        return () => {
            document.removeEventListener('mouseup', clickOutside);
        };
    }, []);

    // 페이지가 변경될 때 nav 닫기
    useEffect(() => {
        setOpenNav(false);
    }, [location]);

    return (
        <div>
            <div className={Container} style={{ backgroundColor }}>
                <div
                    style={{
                        gridTemplateColumns: columns,
                    }}
                >
                    <div></div>
                    {/* 로그인 완료 */}
                    <img
                        src={mainlogo}
                        alt="poscodx"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                            navigate('/');
                        }}
                    />
                    {didLogin ? (
                        <>
                            <div>
                                <div
                                    style={{
                                        color:
                                            inq && !voc && !dashboard
                                                ? '#03507d'
                                                : '#c1c1c1',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => {
                                        setOpenNav(true);
                                    }}
                                >
                                    Inquiry
                                </div>
                                {/* <MenuLink
                                    to={url}
                                    style={{
                                        color:
                                            inq && !voc && !dashboard
                                                ? '#03507d'
                                                : '#c1c1c1',
                                    }}
                                >
                                    Inquiry
                                </MenuLink> */}
                            </div>
                            <div>
                                <div
                                    style={{
                                        color:
                                            !inq && voc && !dashboard
                                                ? '#03507d'
                                                : '#c1c1c1',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => {
                                        setOpenNav(true);
                                    }}
                                >
                                    VoC
                                </div>
                            </div>
                            {/* <div>
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
                            </div> */}
                            <div>
                                {/*<MenuLink*/}
                                {/*    to="/dashboard"*/}
                                {/*    style={{*/}
                                {/*        color:*/}
                                {/*            !inq && !voc && dashboard*/}
                                {/*                ? '#03507d'*/}
                                {/*                : '#c1c1c1',*/}
                                {/*    }}*/}
                                {/*>*/}
                                {/*    DashBoard*/}
                                {/*</MenuLink>*/}
                            </div>
                            <div>
                                <div>
                                    <img src={profile} alt="user" />
                                </div>
                                <div>{currentUserName && `${currentUserName}님`}</div>
                            </div>
                            <div
                                style={{
                                    position: 'relative',
                                    display: 'inline-block',
                                }}
                            >
                                <Button
                                    ref={notificationButtonRef}
                                    onClick={toggleModal}
                                    btnName={'알림'}
                                    width={'44px'}
                                    height={'40px'}
                                    backgroundColor={'#ffffff'}
                                    textColor={'#03507d'}
                                    border={'solid #c1c1c1 1px'}
                                    borderRadius={'12px'}
                                    fontSize={'13px'}
                                />
                                {isModalOpen && (
                                    <NotificationModal onClose={toggleModal} />
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
                                {/*<MenuLink to="/dashboard">DashBoard</MenuLink>*/}
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
            {didLogin && openNav && (
                <div className={Container_Nav} ref={navRef}>
                    <div>
                        <div></div>
                        <div></div>
                        <div>
                            {role === 'CUSTOMER' && (
                                <>
                                    <div
                                        onClick={() => {
                                            setOpenNav(false);
                                        }}
                                    >
                                        <MenuLink to={url}>
                                            Inquiry 조회
                                        </MenuLink>
                                    </div>
                                    <div
                                        onClick={() => {
                                            setOpenNav(false);
                                        }}
                                    >
                                        <MenuLink to="/inq-form/customer">
                                            Inquiry 등록
                                        </MenuLink>
                                    </div>
                                </>
                            )}
                            {role === 'SALES' && (
                                <>
                                    <div
                                        onClick={() => {
                                            setOpenNav(false);
                                        }}
                                    >
                                        <MenuLink to={url}>
                                            Inquiry 조회
                                        </MenuLink>
                                    </div>
                                </>
                            )}
                            {role === 'QUALITY' && (
                                <>
                                    <div
                                        onClick={() => {
                                            setOpenNav(false);
                                        }}
                                    >
                                        <MenuLink to={url}>
                                            품질설계연계조회
                                        </MenuLink>
                                    </div>
                                </>
                            )}
                        </div>
                        <div
                            onClick={() => {
                                setOpenNav(false);
                            }}
                        >
                            {role === 'CUSTOMER' && (
                                <>
                                    <div>
                                        <MenuLink to="voc-list/question">
                                            문의 조회
                                        </MenuLink>
                                    </div>
                                    <div>
                                        <MenuLink to="voc-form/question">
                                            문의 등록
                                        </MenuLink>
                                    </div>
                                </>
                            )}
                            {role === 'SALES' && (
                                <>
                                    <div>
                                        <MenuLink to="/voc-list/question">
                                            문의 조회
                                        </MenuLink>
                                    </div>
                                    <div>
                                        <MenuLink to="/voc-list/collaboration">
                                            협업 조회
                                        </MenuLink>
                                    </div>
                                    {/* <div>협업 등록</div> */}
                                </>
                            )}
                            {role === 'QUALITY' && (
                                <>
                                    <div>
                                        <MenuLink to="/voc-list/question">
                                            문의 조회
                                        </MenuLink>
                                    </div>
                                    <div>
                                        <MenuLink to="/voc-list/collaboration">
                                            협업 조회
                                        </MenuLink>
                                    </div>
                                    {/* <div>협업 등록</div> */}
                                </>
                            )}
                        </div>
                        {/* 대시보드 메뉴 추가 ▼ */}
                        <div></div>
                        {/* 개인정보 메뉴 추가 ▼ */}
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
