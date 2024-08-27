import React, { useState } from 'react';
import ColReqFilterPannel from '../organisms/ColReqFilterPannel';
import ColReqInput from '../organisms/ColReqInput';
import ColFindManagerModal from '../molecules/ColFindManagerModal';
import { getCookie } from '../../apis/utils/cookies';

export default function ColForm() {
    const [openModal, setOpenModal] = useState(false);
    const [colResId, setColResId] = useState('');
    const [colResManagerName, setColResManagerName] = useState('');
    const [colResManagerDept, setColResManagerDept] = useState('');

    if (openModal) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    console.log(getCookie('userId'))
    console.log(getCookie('userRole'))

    return (
        <div>
            <ColReqFilterPannel
                setOpenModal={setOpenModal}
                colResManagerName={colResManagerName}
                colResManagerDept={colResManagerDept}
            />
            <ColReqInput colResId={colResId} />
            {openModal && (
                <ColFindManagerModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    setColResId={setColResId}
                    setColResManagerName={setColResManagerName}
                    setColResManagerDept={setColResManagerDept}
                />
            )}
        </div>
    );
}
