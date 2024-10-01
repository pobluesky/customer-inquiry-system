import React, { useState, useRef, useEffect } from 'react';
import { Alert, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
    fileUploadContainer,
    fileUploadText,
    uploadingIndicator,
    loader,
    progressBarContainer,
    progressBar,
    progressText,
    fileName,
    modalOverlay,
    modalContent,
    modalContentComplete,
    Player_Wrapper,
    React_Player,
} from '../../assets/css/FileUpload.css';
import { postOCR } from '../../apis/api/inquiry';
import { useAuth } from '../../hooks/useAuth';
import ReactPlayer from 'react-player';

const FileUploadModal = ({ productType, onLineItemsUpdate, setError }) => {
    const { userId } = useAuth();

    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [isUploadComplete, setIsUploadComplete] = useState(false);
    const [lineItemsFromOCR, setLineItemsFromOCR] = useState([]);

    const fileInputRef = useRef(null);

    useEffect(() => {
        if (uploadPercentage === 100 && !isUploadComplete) {
            setIsUploadComplete(true);
        }
    }, [uploadPercentage, isUploadComplete]);

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setIsUploading(true);
        setIsModalOpen(true);
        setFile(file);

        let uploadComplete = false;
        let postOCRCalled = false;
        const uploadInterval = 2200;

        const fakeUpload = setInterval(() => {
            const randomStep = Math.floor(Math.random() * (20 - 15 + 1)) + 15;
            setUploadPercentage((prev) => {
                const nextPercentage = prev + randomStep;
                if (nextPercentage >= 100) {
                    clearInterval(fakeUpload);
                    uploadComplete = true;
                    setUploadPercentage(100);

                    if (!postOCRCalled) {
                        postOCRFile(file);
                        postOCRCalled = true;
                    }

                    return 100;
                }

                if (nextPercentage >= 50 && !postOCRCalled) {
                    postOCRFile(file);
                    postOCRCalled = true;
                }

                return nextPercentage;
            });
        }, uploadInterval);
    };

    const openFileDialog = () => {
        if (productType === '') {
            setError('제품유형을 선택해 주세요.');
            return;
        }
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsUploading(false);
        setUploadPercentage(0);
        setIsUploadComplete(false);
    };

    const postOCRFile = async (file) => {
        try {
            const response = await postOCR(userId, file, productType);
            const lineItems = response.data.lineItemResponseDTOs;
            setLineItemsFromOCR(lineItems);

            if (onLineItemsUpdate) {
                onLineItemsUpdate(lineItems);
            }

            setTimeout(() => {
                closeModal();
            }, 150);
        } catch (error) {
            console.log('Error posting OCR Line Items:', error);
        }
    };

    return (
        <>
            <div
                className={fileUploadContainer}
                style={{ textAlign: 'center' }}
            >
                <input
                    type="file"
                    id="file-upload-input"
                    onChange={handleFileUpload}
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                />

                <Button
                    style={{
                        marginLeft: 'auto',
                        color: '#03507D',
                        backgroundColor: '#ffffff',
                        cursor: 'pointer',
                    }}
                    onClick={openFileDialog}
                >
                    PDF 업로드
                </Button>

                {isModalOpen && !isUploadComplete && (
                    <div className={modalOverlay} onClick={closeModal}>
                        <div
                            className={modalContent}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {isUploading && !isUploadComplete && (
                                <div className={uploadingIndicator}>
                                    <button
                                        onClick={closeModal}
                                        style={{
                                            position: 'absolute',
                                            top: '-13px',
                                            right: '-13px',
                                            background: 'transparent',
                                            border: 'none',
                                            fontSize: '24px',
                                            cursor: 'pointer',
                                            color: '#888',
                                        }}
                                    >
                                        &times;
                                    </button>
                                    {/* 기존 로딩바 */}
                                    {/* <div
                                        className={`loaderContainer ${
                                            isUploadComplete ? 'hidden' : ''
                                        }`}
                                    >
                                        <div className={loader}></div>
                                    </div> */}
                                    {/* 로딩 비디오 */}
                                    <div className={Player_Wrapper}>
                                        <ReactPlayer
                                            url={'/videos/loading-ocr.mp4'}
                                            width={'200px'}
                                            height={'200px'}
                                            playing={true}
                                            muted={true}
                                            controls={false}
                                            loop={true}
                                            playbackRate={'7.0'}
                                            className={React_Player}
                                        />
                                    </div>
                                    <p className={fileName}>{file?.name}</p>
                                    <p className={fileUploadText}>
                                        AI 기술을 활용해 내역을 등록 중입니다.
                                    </p>
                                    <div className={progressBarContainer}>
                                        <div
                                            className={progressBar}
                                            style={{
                                                width: `${uploadPercentage}%`,
                                            }}
                                        ></div>
                                    </div>
                                    <p className={progressText}>
                                        {uploadPercentage}% 완료
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {isModalOpen && isUploadComplete && (
                <div className={modalOverlay} onClick={closeModal}>
                    <div
                        className={modalContentComplete}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <CheckCircleIcon
                            style={{
                                margin: '40px 0 0 0',
                                fontSize: 60,
                                color: '#00c6ff',
                                opacity: isUploadComplete ? 1 : 0,
                                transition: 'opacity 0.5s ease',
                            }}
                        />
                        <div className={fileUploadText}>업로드 완료</div>
                        <div className={progressText}>
                            업로드된 데이터를 확인해 주세요.
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FileUploadModal;
