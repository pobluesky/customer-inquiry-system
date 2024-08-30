import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../atoms/Button';
import pobluesky from '../../assets/css/icons/pobluesky.png';
import profile from '../../assets/css/icons/profile-sample.png';
import UserInfoModal from './UserInfoModal';
import NotificationModal from '../molecules/NotificationModal';
import { getUserName, userName } from '../../index';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useAuth } from '../../hooks/useAuth';
import {
    getUserInfoByCustomers,
    getUserInfoByManagers,
} from '../../apis/api/auth';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Header_Container } from '../../assets/css/MyHeader.css';

export const MenuLink = styled(Link)`
    text-decoration: none;
    color: #25262b;
    margin: 0 36px 0 0;
`;

function MyHeader() {
    const navigate = useNavigate();
    const { didLogin, userId, role } = useAuth();

    const url = `/inq-list/${role?.toLowerCase()}`;

    const [name, setName] = useState(null);
    const [, setGlobalName] = useRecoilState(userName);
    const currentUserName = useRecoilValue(getUserName);

    const [openNotifyModal, setOpenNotifyModal] = useState(false);
    const notificationButtonRef = useRef(null);

    const toggleModal = () => {
        setOpenNotifyModal(!openNotifyModal);
    };

    const [openInfoModal, setOpenInfoModal] = useState(false);
    const modalRef = useRef(null);

    const location = useLocation();
    const isMainPage = location.pathname === '/';
    const isLoginPage = location.pathname === '/login';
    const isJoinPage = location.pathname === '/join';
    const [curPage, setCurPage] = useState('inq');

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

    // 모달 켜진 상태로 페이지 이동 또는 외부 컴포넌트 클릭 시 창 닫기
    // useEffect(() => {
    //     const clickOutside = (event) => {
    //         if (modalRef.current && !modalRef.current.contains(event.target)) {
    //             setOpenInfoModal(false);
    //             setOpenNotifyModal(false);
    //         }
    //     };
    //     window.addEventListener('mouseup', clickOutside);
    //     return () => window.removeEventListener('mouseup', clickOutside);
    // }, []);

    useEffect(() => {
        setOpenInfoModal(false);
        setOpenNotifyModal(false);
    }, [location]);

    const InquiryMenu = () => (
        <>
            <div>
                <MenuLink to={url}>Inquiry 조회</MenuLink>
            </div>
            {role === 'CUSTOMER' && (
                <div>
                    <MenuLink to="/inq-form/customer">Inquiry 등록</MenuLink>
                </div>
            )}
            {role !== 'CUSTOMER' && (
                <div>
                    <MenuLink to="/dashboard">대시보드</MenuLink>
                </div>
            )}
        </>
    );

    const VoCMenu = () => (
        <>
            <div>
                <MenuLink to="/voc-list/question">문의 조회</MenuLink>
            </div>
            {role === 'SALES' || role === 'QUALITY' ? (
                <div>
                    <MenuLink to="/voc-list/collaboration">협업 조회</MenuLink>
                </div>
            ) : (
                <div>
                    <MenuLink to="/voc-form/question">문의 등록</MenuLink>
                </div>
            )}
        </>
    );

    console.log(openNotifyModal);

    return (
        <>
            <div className={Header_Container}>
                <div>
                    <div>
                        <MenuLink
                            to={url}
                            onClick={() => {
                                setCurPage('inq');
                            }}
                        >
                            Inquiry
                        </MenuLink>
                        <MenuLink
                            to="voc-list/question"
                            onClick={() => {
                                setCurPage('voc');
                            }}
                        >
                            VoC
                        </MenuLink>
                    </div>
                    <hr />
                    <div>
                        <div>
                            <div>
                                <img
                                    src={pobluesky}
                                    alt="poscodx"
                                    onClick={() => {
                                        navigate('/');
                                    }}
                                />
                            </div>
                            {curPage === 'inq' ? InquiryMenu() : VoCMenu()}
                        </div>
                        <div>
                            {/* 로그인 & 회원가입 버튼 */}
                            {!didLogin && (isJoinPage || isMainPage) && (
                                <div>
                                    <Button
                                        onClick={() => navigate('/login')}
                                        btnName={'로그인'}
                                        width={'84px'}
                                        height={'36px'}
                                        textColor={'#64636A'}
                                        backgroundColor={'#ffffff'}
                                        border={'solid #d5dbe2 1px'}
                                        borderRadius={'4px'}
                                        fontSize={'18px'}
                                        fontFamily={'Pretendard-Regular'}
                                    />
                                </div>
                            )}
                            {!didLogin && isLoginPage && (
                                <div>
                                    <Button
                                        onClick={() => navigate('/join')}
                                        btnName={'회원가입'}
                                        width={'84px'}
                                        height={'36px'}
                                        textColor={'#64636A'}
                                        backgroundColor={'#ffffff'}
                                        border={'solid #d5dbe2 1px'}
                                        borderRadius={'4px'}
                                        fontSize={'18px'}
                                        fontFamily={'Pretendard-Regular'}
                                    />
                                </div>
                            )}
                            {didLogin && (
                                <>
                                    <div>
                                        <img
                                            src={profile}
                                            onClick={() => {
                                                setOpenInfoModal(true);
                                            }}
                                        />
                                    </div>
                                    <div>{currentUserName}</div>
                                    {/* <div
                                        onClick={toggleModal}
                                        ref={notificationButtonRef}
                                    >
                                        <Badge badgeContent={4} color="primary">
                                            <NotificationsNoneIcon color="action" />
                                        </Badge>
                                    </div> */}
                                    <div
                                        style={{
                                            position: 'relative',
                                            display: 'inline-block',
                                        }}
                                    >
                                        <button
                                            ref={notificationButtonRef}
                                            onClick={toggleModal}
                                            // btnName={'알림'}
                                            // width={'44px'}
                                            // height={'40px'}
                                            // backgroundColor={'#ffffff'}
                                            // textColor={'#03507d'}
                                            // border={'solid #c1c1c1 1px'}
                                            // borderRadius={'12px'}
                                        >
                                            <Badge
                                                badgeContent={4}
                                                color="primary"
                                            >
                                                <NotificationsNoneIcon color="action" />
                                            </Badge>
                                        </button>
                                        {openNotifyModal && (
                                            <NotificationModal
                                                onClose={toggleModal}
                                            />
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {openInfoModal && (
                <div ref={modalRef}>
                    <UserInfoModal />
                    <NotificationModal onClose={toggleModal} />
                </div>
            )}
            {openNotifyModal && <NotificationModal onClose={toggleModal} />}
        </>
    );
}

export default MyHeader;
