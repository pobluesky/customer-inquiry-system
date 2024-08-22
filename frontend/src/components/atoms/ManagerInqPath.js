import React from 'react';
import arrow from '../../assets/css/icons/arrow.svg';
import { Link } from 'react-router-dom';
import { _Link } from '../../assets/css/Inquiry.css';

function ManagerInqPath({ largeCategory, mediumCategory, smallCategory }) {
    return (
        <div
            style={{
                color: '#616161',
                fontSize: '20px',
                display: 'flex',
                alignItems: 'center',
                marginLeft: '2vw',
                marginTop: '4vh',
            }}
        >
            <Link to="/inq-main" className={_Link}>
                <span>{largeCategory}</span>
            </Link>
            <img src={arrow} alt="arrow" />
            <Link to="/inq-list/manager" className={_Link}>
                <span>{mediumCategory}</span>
            </Link>
            <img src={arrow} alt="arrow" />
            <Link to="/inq-list/manager/:id" className={_Link}>
                <span>{smallCategory}</span>
            </Link>
        </div>
    );
}

export default ManagerInqPath;
