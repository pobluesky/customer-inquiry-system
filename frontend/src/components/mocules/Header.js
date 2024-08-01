import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/Button';
import mainlogo from '../../assets/css/icons/mainlogo.svg';
import person from '../../assets/css/icons/person.svg';
// import PropTypes from 'prop-types';

// [To do list] 로그인 권한 여부 확인 기능 추가
function Header({ login, inq, voc, dashboard }) {
    const navigate = useNavigate();
    const backgroundColor = login ? '#EDFAFF' : '';

    return (
        <div style={{ width: '100%', height: '84px', backgroundColor: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor, boxShadow: '0 4px 8px rgba(0,0,0,0.10)' }}>
            {login ? (
                <>  
                    {/* 로그인 완료 */}
                    <div style={{ display: 'flex', alignItems: 'center', fontSize: '1.5em', fontWeight: 'bold' }}>
                        <img src={mainlogo} alt="poscodx" width="120px" style={{ marginLeft: '4vw' }} />
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Link to="/inq" style={{ marginRight: '6vw', textDecoration: 'none', color: inq && !voc && !dashboard ? '#03507d' : '#c1c1c1', fontSize: '1.5em', fontWeight: 'bold' }}>Inquiry</Link>
                            <Link to="/voc" style={{ marginRight: '6vw', textDecoration: 'none', color: !inq && voc && !dashboard ? '#03507d' : '#c1c1c1', fontSize: '1.5em', fontWeight: 'bold' }}>VoC</Link>
                            <Link to="/dashboard" style={{ marginRight: '6vw', textDecoration: 'none', color: !inq && !voc && dashboard ? '#03507d' : '#c1c1c1', fontSize: '1.5em', fontWeight: 'bold' }}>DashBoard</Link>

                            <img src={person} alt="user" width="30px" style={{ marginRight: '1vw' }} />
                            <span style={{ marginRight: '4vw', fontSize: '1.2em', fontWeight: 'bold', color: '#03507d' }}>포청천님</span>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={mainlogo} alt="poscodx" width="120px" style={{ marginLeft: '4vw' }} />
                            <Link to="/inq" style={{ marginLeft: '6vw', textDecoration: 'none', color: '#03507d', fontSize: '1.5em', fontWeight: 'bold', disabled: !inq ? true : false }}>Inquiry</Link>
                            <Link to="/voc" style={{ marginLeft: '6vw', textDecoration: 'none', color: '#03507d', fontSize: '1.5em', fontWeight: 'bold', disabled: !voc ? true : false }}>VoC</Link>
                            <Link to="/dashboard" style={{ marginLeft: '6vw', textDecoration: 'none', color: '#03507d', fontSize: '1.5em', fontWeight: 'bold', disabled: !dashboard ? true : false }}>DashBoard</Link>
                    </div>
                    <div>
                        {/* 로그인 & 회원가입 버튼 */}
                        <Button onClick={() => navigate('/login')} btnName={'로그인'} width={'84px'} height={'40px'} backgroundColor={'#03507d'} textColor={'#eeeeee'} borderRadius={'12px'} fontSize={'16px'} />
                        <Button onClick={() => navigate('/join')} btnName={'회원가입'} width={'84px'} height={'40px'} margin={'24px'} backgroundColor={'#ffffff'} textColor={'#03507d'} borderRadius={'12px'} fontSize={'16px'} />
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
