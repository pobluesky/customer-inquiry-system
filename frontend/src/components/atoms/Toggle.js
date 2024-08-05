import React, { useState } from 'react';
import toggle_opened from '../../assets/css/icons/toggle_opened.svg';
import toggle_closed from '../../assets/css/icons/toggle_closed.svg';

function Toggle({ isChecked, setCheck }) {
    return (
        <>
            <img
                onClick={() => {
                    setCheck(!isChecked);
                }}
                src={isChecked ? toggle_closed : toggle_opened}
                alt="toggleButton"
            />
        </>
    );
}

export default Toggle;
