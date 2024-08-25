import React from 'react';
import arrow from '../../assets/css/icons/arrow.svg';
import { Link } from 'react-router-dom';
import { _Link } from '../../assets/css/Inquiry.css';

export default function ColPath({
    largeCategory,
    mediumCategory,
    smallCategory,
}) {
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
            <Link to="/voc-collaboration" className={_Link}>
                <span>{largeCategory}</span>
            </Link>
            <img src={arrow} alt="arrow" />
            <Link to="/voc-collaboration" className={_Link}>
                <span>{mediumCategory}</span>
            </Link>
            <img src={arrow} alt="arrow" />
            <Link to="/voc-collaboration" className={_Link}>
                <span>{smallCategory}</span>
            </Link>
        </div>
    );
}
