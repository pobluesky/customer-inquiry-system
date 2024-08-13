import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/Button';
import mainlogo from '../../assets/css/icons/mainlogo.svg';
import person from '../../assets/css/icons/person.svg';
import { Container, Logo, Container_Menu, Menu, Menu_Link, User } from '../../assets/css/Header.css';
// import PropTypes from 'prop-types';

// [To do list] 로그인 권한 여부 확인 기능 추가
function Header({ login, inq, voc, dashboard }) {
    const navigate = useNavigate();
    const backgroundColor = login ? '#EDFAFF' : '';

    return (
        <div className={Container} style={{ backgroundColor }}>
            {login ? (
                <>
                    {/* 로그인 완료 */}
                    <div className={Logo}>
                        <img src={mainlogo} alt="poscodx" width="120px" style={{ marginLeft: '4vw' }} />
                    </div>
                    <div>
                        <div className={Container_Menu}>
                            <Link to="/inq-main" className={Menu_Link} style={{ color: inq && !voc && !dashboard ? '#03507d' : '#c1c1c1' }}>
                                Inquiry
                            </Link>
                            <Link to="/voc-main" className={Menu_Link} style={{ color: !inq && voc && !dashboard ? '#03507d' : '#c1c1c1' }}>
                                VoC
                            </Link>
                            <Link to="/dashboard" className={Menu_Link} style={{ color: !inq && !voc && dashboard ? '#03507d' : '#c1c1c1' }}>
                                DashBoard
                            </Link>
                            <img src={person} alt="user" width="30px" style={{ marginRight: '1vw' }} />
                            <span className={User}>포청천님</span>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className={Container_Menu}>
                        <img src={mainlogo} alt="poscodx" width="120px" style={{ marginLeft: '4vw' }} />
                        <Link to="/inq" className={Menu}>
                            Inquiry
                        </Link>
                        <Link to="/voc" className={Menu}>
                            VoC
                        </Link>
                        <Link to="/dashboard" className={Menu}>
                            DashBoard
                        </Link>
                    </div>
                    <div>
                        {/* 로그인 & 회원가입 버튼 */}
                        <Button onClick={() => navigate('/login')} btnName={'로그인'} width={'84px'} height={'40px'} backgroundColor={'#03507d'} textColor={'#eeeeee'} border={'solid #c1c1c1 1px'} borderRadius={'12px'} fontSize={'16px'} />
                        <Button onClick={() => navigate('/join')} btnName={'회원가입'} width={'84px'} height={'40px'} margin={'24px'} backgroundColor={'#ffffff'} textColor={'#03507d'} border={'solid #c1c1c1 1px'} borderRadius={'12px'} fontSize={'16px'} />
                    </div>
                </>
            )}
        </div>
    );
}

// Header.propTypes = {
//     username: PropTypes.string.isRequired,
// };

export default Header;
