import React, { useState } from 'react';
import ColReqFilterPannel from '../organisms/ColReqFilterPannel';
import ColReqInput from '../organisms/ColReqInput';
import ColFindManagerModal from '../molecules/ColFindManagerModal';

export default function ColForm() {
    const [openModal, setOpenModal] = useState(false);
    const [colResId, setColResId] = useState('');

    if (openModal) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return (
        <div>
            <ColReqFilterPannel
                setOpenModal={setOpenModal}
                colResId={colResId}
            />
            <ColReqInput colResId={colResId} />
            {openModal && (
                <ColFindManagerModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    setColResId={setColResId}
                />
            )}
        </div>
    );
}
