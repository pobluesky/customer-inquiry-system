import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../atoms/Button';
import mainlogo from '../../assets/css/icons/mainlogo.svg';
import person from '../../assets/css/icons/person.svg';
import { Container } from '../../assets/css/Header.css';

export const MenuLink = styled(Link)`
    text-decoration: none;
`;

// [To do list] 로그인 권한 여부 확인 기능 추가
function Header({ login, inq, voc, dashboard }) {
    const navigate = useNavigate();
    const backgroundColor = login ? '#EDFAFF' : '';

    return (
        <div className={Container} style={{ backgroundColor }}>
            <div>
                <div></div>
                {/* 로그인 완료 */}
                <img src={mainlogo} alt="poscodx" />
                {login ? (
                    <>
                        <div>
                            <MenuLink
                                to="/inq"
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
                                to="/voc"
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
                        <div>포청천님</div>
                    </>
                ) : (
                    <>
                        <div>
                            <Link to="/inq">Inquiry</Link>
                            <Link to="/voc">VoC</Link>
                            <Link to="/dashboard">DashBoard</Link>
                        </div>
                        <div>
                            {/* 로그인 & 회원가입 버튼 */}
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
                            <Button
                                onClick={() => navigate('/join')}
                                btnName={'회원가입'}
                                width={'84px'}
                                height={'40px'}
                                margin={'24px'}
                                backgroundColor={'#ffffff'}
                                textColor={'#03507d'}
                                border={'solid #c1c1c1 1px'}
                                borderRadius={'12px'}
                                fontSize={'16px'}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Header;
