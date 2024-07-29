import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from './Button';
import mainlogo from '../../assets/image/mainlogo.svg';
// import PropTypes from 'prop-types';

function Header() {
    return (
        <div style={{ width: '100%', height: '84px', backgroundColor: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.10)' }}>
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '1.5em', fontWeight: 'bold' }}>
                <img src={mainlogo} alt="poscodx" width="120px" style={{ marginLeft: '6vw' }} />
                <Link to="/Ask" style={{ marginLeft: '5vw', textDecoration: 'none', color: '#03507d' }}>문의하기</Link>
                <Link to="/MyAsk" style={{ marginLeft: '5vw', textDecoration: 'none', color: '#03507d' }}>나의문의</Link>
                <Link to="/Collaboration" style={{ marginLeft: '5vw', textDecoration: 'none', color: '#03507d' }}>협업목록</Link>
            </div>
            <div>
                <Button onClick={useNavigate('/login')} btnName={'로그인'} width={'84px'} height={'40px'} backgroundColor={'#03507d'} textColor={'#eeeeee'} borderRadius={'12px'} fontSize={'16px'} />
                <Button onClick={useNavigate('/join')} btnName={'회원가입'} width={'84px'} height={'40px'} margin={'24px'} backgroundColor={'#ffffff'} textColor={'#03507d'} borderRadius={'12px'} fontSize={'16px'} />
            </div>
        </div>
    );
}

// Header.propTypes = {
//     username: PropTypes.string.isRequired,
// };

export default Header;
