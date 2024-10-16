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

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
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

    // 연소요량
    const testAnnualCost = () => {
        if (localData.length > 0) {
            localData.forEach((item, index) => {
                // 조건 1: 맨 앞의 $ 제거
                const tempValue = item.annualCost.replace(/^[$]+/, '');

                // 쉼표가 연속으로 나오는지 확인하는 정규식 (예: 2,,000 등)
                const hasInvalidCommas = /,,/.test(tempValue);

                // 쉼표를 제거한 값의 길이에 따라 제거할 쉼표 개수 결정
                const commaCount = Math.floor(
                    tempValue.replace(/[,]/g, '').length / 3,
                );

                let count = 0;

                // 쉼표 개수만큼 제거
                const annualCostValue = tempValue.replace(/,/g, (match) => {
                    count++;
                    return count <= commaCount ? '' : match;
                });

                // 숫자가 아닌 문자가 포함되었는지 확인
                const isValidNumber = /^[0-9.]+$/.test(annualCostValue);

                // 값이 -5000 초과, 43000 미만인지 확인
                const isWithinRange =
                    parseFloat(annualCostValue) > -5000 &&
                    parseFloat(annualCostValue) < 43000;

                // 쉼표가 연속되었거나 숫자 형식이 잘못되었거나 범위를 벗어난 경우 처리
                if (hasInvalidCommas || !isValidNumber || !isWithinRange) {
                    handleClick();
                    console.log(
                        `${index + 1}번째 줄의 연소요량 값이 적합하지 않습니다`,
                    );
                }
            });
        }
    };

    // 공차
    const testTolerance = () => {
        if (localData != []) {
            localData.forEach((item, index) => {
                // 조건 1: 완전한 숫자
                const toleranceValue = item.tolerance
                    .replace(/^[±]+/, '')
                    .replace(/mm$/, '');

                const isValidNumber = /^[0-9.]+$/.test(toleranceValue);

                // 조건 2: -0.12 초과이면서 0.47 미만
                const isWithinRange =
                    toleranceValue > -0.12 && toleranceValue < 0.47;

                if (!isValidNumber || !isWithinRange) {
                    handleClick();
                    console.log(
                        `${index + 1}번째 줄의 공차 값이 적합하지 않습니다`,
                    );
                }
            });
        }
    };

    return (
        <div>
            <div>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                >
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        라인 아이템 중 적합하지 않은 데이터가 있습니다.
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
                                        testAnnualCost();
                                        testTolerance();
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
