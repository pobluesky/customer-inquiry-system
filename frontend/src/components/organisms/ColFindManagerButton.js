import React, { useEffect, useState } from 'react';
import { QuestionAnswerButton } from '../atoms/VocButton';
import { Col_Find_Manager_Button } from '../../assets/css/Voc.css';

export default function ColFindManagerButton({
    setOpenModal,
    colResManagerName,
    colResManagerDept,
}) {
    const warningMsg =
        '협업 요청 시 반드시 희망하는 협업 응답자를 선택해야 합니다.';
    const [managerInfo, setManagerInfo] = useState('');

    const selectedManager = () => {
        if (colResManagerDept && colResManagerName) {
            setManagerInfo(
                `${colResManagerDept} 부서 품질 담당자 ${colResManagerName}님에게 협업 요청을 보냅니다.`,
            );
        }
    };

    useEffect(() => {
        selectedManager();
    }, [colResManagerName, colResManagerDept]);

    return (
        <div className={Col_Find_Manager_Button}>
            <div>
                <QuestionAnswerButton
                    btnName={'검색'}
                    backgroundColor={'#ffffff'}
                    textColor={'#1748ac'}
                    onClick={() => {
                        setOpenModal(true);
                    }}
                />
                {managerInfo ? (
                    <div>{managerInfo}</div>
                ) : (
                    <div style={{ color: 'red' }}>{warningMsg}</div>
                )}
            </div>
        </div>
    );
}
