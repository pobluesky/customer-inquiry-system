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
    modalOverlay,
    modalContent,
    modalContentComplete
} from '../../assets/css/FileUpload.css';
import { postOCR } from '../../apis/api/inquiry';
import { useAuth } from '../../hooks/useAuth';

const FileUploadModal = ({ productType, onLineItemsUpdate }) => {
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
            setTimeout(() => closeModal(), 3000); // Close modal after a delay to allow animation
        }
    }, [uploadPercentage, isUploadComplete]);

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setIsUploading(true);
        setIsModalOpen(true);
        setFile(file);

        let uploadComplete = false;
        const uploadInterval = 2200;
        const uploadStep = 7;

        const fakeUpload = setInterval(() => {
            setUploadPercentage((prev) => {
                const nextPercentage = prev + uploadStep;
                if (nextPercentage >= 100) {
                    clearInterval(fakeUpload);
                    uploadComplete = true;
                    setUploadPercentage(100);
                    if(nextPercentage >= 5) {
                        postOCRFile(file);
                    }
                    return 100;
                }
                return nextPercentage;
            });
        }, uploadInterval);
    };

    const openFileDialog = () => {
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
            console.log('OCR Response:', lineItems);

            if (onLineItemsUpdate) {
                onLineItemsUpdate(lineItems);
            }
        } catch (error) {
            console.error('Error posting OCR Line Items:', error);
        }
    };

    return (
        <>
            <div className={fileUploadContainer} style={{ textAlign: 'center' }}>
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
                        <div className={modalContent} onClick={(e) => e.stopPropagation()}>
                            {isUploading && !isUploadComplete && (
                                <div className={uploadingIndicator}>
                                    <div className={`loaderContainer ${isUploadComplete ? 'hidden' : ''}`}>
                                        <div className={loader}></div>
                                    </div>
                                    <p className={fileUploadText}>AI 기술을 활용해 내역을 등록 중입니다.</p>
                                    <div className={progressBarContainer}>
                                        <div
                                            className={progressBar}
                                            style={{ width: `${uploadPercentage}%` }}
                                        ></div>
                                    </div>
                                    <p className={progressText}>{uploadPercentage}% 완료</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
            {isModalOpen && isUploadComplete && (
                <div className={modalOverlay} onClick={closeModal}>
                    <div className={modalContentComplete} onClick={(e) => e.stopPropagation()}>
                            <CheckCircleIcon style={{ margin: '47px 0 0 0', fontSize: 60, color: '#00c6ff', opacity: isUploadComplete ? 1 : 0, transition: 'opacity 0.5s ease' }} />
                            <div className={fileUploadText}>업로드 완료</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FileUploadModal;
