import React from 'react';
import arrow from '../../assets/css/icons/arrow.svg';
import { Link } from 'react-router-dom';
import { _Link } from '../../assets/css/Inquiry.css';

function ManagerInqPath({ largeCategory, mediumCategory, smallCategory, role }) {
    const mediumUrl = `/inq-list/${role}`;

    return (
        <div
            style={{
                color: '#616161',
                fontSize: '20px',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <span>{largeCategory}</span>
            <img src={arrow} alt="arrow" />
            <Link to={mediumUrl} className={_Link}>
                <span>{mediumCategory}</span>
            </Link>
            {smallCategory && (
                <img src={arrow} alt="arrow" />
            )}
            <span>{smallCategory}</span>
        </div>
    );
}

export default ManagerInqPath;
