import React, { useState, useEffect } from 'react';
import Toggle from '../atoms/Toggle';
import { _ToggleOpen, _ToggleClose } from '../../assets/css/Form.css';
import { Button, Snackbar, Alert } from '@mui/material';
import FileUploadModal from './FileUploadModal';
import Modal from './Modal';

const LineItemToggleBar = ({
    title,
    isChecked,
    setCheck,
    productType,
    onLineItemsChange,
    handleLineItemsChangeByOCR,
    onSelect,
    isUpdate,
    setError,
    localData,
}) => {
    const [lineItemsFromOCR, setLineItemsFromOCR] = useState([]);
    const borderRadius = isChecked ? '7px 7px 0 0' : '7px 7px 7px 7px';

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFileModalOpen, setIsFileModalOpen] = useState(true);

    const [open, setOpen] = useState(false);
    const [successOpen, setSuccessOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleSuccessClick = () => {
        setSuccessOpen(true);
    };

    const handleSuccessClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSuccessOpen(false);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSelect = (selectedData) => {
        onLineItemsChange(selectedData);
        onSelect(selectedData[0]?.lineItemList);
        closeModal();
        return selectedData[0]?.lineItemList;
    };

    const handleLineItemsFromOCR = (newLineItems) => {
        setLineItemsFromOCR(newLineItems);

        if (handleLineItemsChangeByOCR) {
            handleLineItemsChangeByOCR(newLineItems);
        }
    };

    const testValue = () => {
        if (localData.length > 0) {
            for (let i = 0; i < localData.length; i++) {
                const item = localData[i];

                /******** 연소요량 ********/
                const tempValue = item.annualCost.replace(/^[$]+/, '');
                const hasInvalidCommas = /,,/.test(tempValue);
                const commaCount = Math.floor(
                    tempValue.replace(/[,]/g, '').length / 3,
                );
                let count = 0;
                const annualCostValue = tempValue.replace(/,/g, (match) => {
                    count++;
                    return count <= commaCount ? '' : match;
                });
                const isAnnualCostValidNumber = /^[0-9.]+$/.test(
                    annualCostValue,
                );
                const isAnnualCostWithinRange =
                    parseFloat(annualCostValue) > -5000 &&
                    parseFloat(annualCostValue) < 43000;

                /******** 공차 ********/
                const toleranceValue = item.tolerance
                    .replace(/^([±+-])/, '')
                    .replace(/mm$/, '');
                const isToleranceValidNumber = /^[0-9.]+$/.test(toleranceValue);
                const isToleranceWithinRange =
                    toleranceValue > -0.12 && toleranceValue < 0.47;

                if (
                    hasInvalidCommas ||
                    !isAnnualCostValidNumber ||
                    !isAnnualCostWithinRange ||
                    !isToleranceValidNumber ||
                    !isToleranceWithinRange
                ) {
                    handleClick();
                    return;
                }
            }

            setTimeout(() => {
                handleSuccessClick();
            }, 1000);
        }
    };

    return (
        <div>
            <div>
                <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                >
                    <Alert
                        onClose={handleClose}
                        severity="warning"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        라인 아이템 중 적합하지 않은 데이터가 있습니다.
                    </Alert>
                </Snackbar>
            </div>
            <div>
                <Snackbar
                    open={successOpen}
                    autoHideDuration={3000}
                    onClose={handleSuccessClose}
                >
                    <Alert
                        onClose={handleSuccessClose}
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        라인 아이템 데이터 적합 테스트 완료
                    </Alert>
                </Snackbar>
            </div>
            {/* Toggle Bar */}
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
                    {isUpdate ? (
                        <>
                            <Button
                                style={{
                                    marginLeft: 'auto',
                                    color: '#dd3b33',
                                    backgroundColor: '#ffffff',
                                    cursor: 'pointer',
                                }}
                                onClick={() => {
                                    if (localData) {
                                        testValue();
                                    }
                                }}
                            >
                                이상치 측정
                            </Button>
                            &nbsp;&nbsp;
                            <Button
                                style={{
                                    // marginLeft: 'auto',
                                    color: '#03507D',
                                    backgroundColor: '#ffffff',
                                    cursor: 'pointer',
                                }}
                                onClick={openModal}
                            >
                                과거이력조회
                            </Button>
                            <Modal
                                isOpen={isModalOpen}
                                onClose={closeModal}
                                productType={productType}
                                onSelect={handleSelect}
                                setError={setError}
                            />
                            &nbsp;&nbsp;
                            {isFileModalOpen && (
                                <FileUploadModal
                                    productType={productType}
                                    onLineItemsUpdate={handleLineItemsFromOCR}
                                    setError={setError}
                                />
                            )}
                        </>
                    ) : (
                        ''
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

export default LineItemToggleBar;
