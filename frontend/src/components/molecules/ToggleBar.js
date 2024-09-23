import React, { useState } from 'react';
import Toggle from '../atoms/Toggle';
import { _ToggleOpen, _ToggleClose } from '../../assets/css/Form.css';
import { Button, Chip, Stack } from '@mui/material';
import ManagerModal from './ManagerModal';

const ToggleBar = ({ title, isChecked, setCheck, progress }) => {
    const borderRadius = isChecked ? '20px 20px 0 0' : '20px 20px 20px 20px';

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [managerInfo, setManagerInfo] = useState([]);

    const handleSelect = (selectedData) => {
        closeModal();
        setManagerInfo(selectedData);
    }

    return (
        <div>
            {/* 토글 바 */}
            {isChecked ? (
                <div className={_ToggleOpen} style={{ borderRadius }}>
                    <Toggle isChecked={isChecked} setCheck={setCheck} />
                    &nbsp;&nbsp;
                    <span
                        style={{
                            color: '#ffffff',
                            fontSize: '24px',
                            fontWeight: 'bold',
                        }}
                    >
                        &nbsp;&nbsp;{title}
                    </span>
                    {title === '기본정보' && progress === 'FORM' && (
                        <>
                            <Button
                                style={{
                                    marginLeft: 'auto',
                                    color: '#ffffff',
                                    backgroundColor: '#03507D',
                                    cursor: 'none',
                                    fontSize: '15px',
                                    fontWeight: '800',
                                }}
                            >
                                {managerInfo[0]?.name}
                            </Button>
                        <Button
                            style={{
                                marginLeft: '10px',
                                color: '#03507D',
                                backgroundColor: '#ffffff',
                                cursor: 'pointer',
                            }}
                            onClick={openModal}
                        >
                            담당자 지정
                        </Button>
                        <ManagerModal
                            isOpen={isModalOpen}
                            onClose={closeModal}
                            onSelect={handleSelect}
                            // setError={setError}
                        />
                        </>
                    )}
                </div>
            ) : (
                <div className={_ToggleClose} style={{ borderRadius }}>
                    <Toggle isChecked={isChecked} setCheck={setCheck} />
                    &nbsp;&nbsp;
                    <span
                        style={{
                            color: '#03507D',
                            fontSize: '24px',
                            fontWeight: 'bold',
                        }}
                    >
                        {title}
                    </span>
                </div>
            )}
        </div>
    );
};

export default ToggleBar;
