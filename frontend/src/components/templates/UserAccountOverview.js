import React, { useState } from 'react';
import ExistingUserInfo from '../organisms/ExistingUserInfo';
import EditingUserInfo from '../organisms/EditingUserInfo';
import { User_Account } from '../../assets/css/Auth.css';

export default function UserAccountOverview() {
    const [edit, setEdit] = useState(false);

    return (
        <div className={User_Account}>
            <button
                onClick={() => {
                    setEdit(!edit);
                }}
            >
                수정
            </button>
            {edit ? <ExistingUserInfo /> : <EditingUserInfo />}
        </div>
    );
}
