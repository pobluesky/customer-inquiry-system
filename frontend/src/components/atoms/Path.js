import React from 'react';
import arrow from '../../assets/css/icons/arrow.svg';

function Path({ largeCategory, mediumCategory, smallCategory }) {
    return (
        <div style={{ color: '#616161', fontSize: '20px', display: 'flex', alignItems: 'center', marginLeft: '2vw', marginTop: '4vh' }}>
            <span>{largeCategory}</span><img src={arrow} alt="arrow" /><span>{mediumCategory}</span><img src={arrow} alt="arrow" /><span>{smallCategory}</span>
        </div>
    );
}

export default Path;
