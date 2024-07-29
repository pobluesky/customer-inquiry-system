import React from 'react';
import companylogo from '../../assets/image/companylogo.svg';
// import PropTypes from 'prop-types';

function Header({ username }) {
    return (
        <div style={{ width: '100%', height: '48px', backgroundColor: '#03507D', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div><img src={companylogo} alt="poscodx" width="72px" style={{ marginLeft: '20px' }} /></div>
            <div style={{ color: '#ffffff', marginRight: '20px' }}>{username == null ? '비회원' : username}</div>
        </div>
    );
}

// Header.propTypes = {
//     username: PropTypes.string.isRequired,
// };

export default Header;
