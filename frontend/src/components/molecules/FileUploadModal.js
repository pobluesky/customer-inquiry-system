import React, { useState, useRef } from 'react';
import { Button } from '@mui/material';
import {
    fileUploadContainer,
    fileUploadText,
    uploadingIndicator,
    loader,
    progressBarContainer,
    progressBar,
    progressText,
    modalOverlay,
    modalContent
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

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setIsUploading(true);
        setIsModalOpen(true);
        setFile(file);

        let uploadComplete = false;
        const uploadInterval = 2000;
        const uploadStep = 7;

        const fakeUpload = setInterval(() => {
            setUploadPercentage((prev) => {
                const nextPercentage = prev + uploadStep;
                if (nextPercentage >= 100) {
                    clearInterval(fakeUpload);
                    uploadComplete = true;
                    setUploadPercentage(100);
                    setIsUploadComplete(true);
                    if(nextPercentage >= 10) {
                        postOCRFile(file);
                    }
                    return 100;
                }
                return nextPercentage;
            });
        }, uploadInterval);

        if (!uploadComplete) {
            setTimeout(() => {
                if (!uploadComplete) {
                    clearInterval(fakeUpload);
                    setUploadPercentage(100);
                    postOCRFile(file);
                }
            }, 20000);
        }
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
        } finally {
            setIsUploading(false);
            closeModal();
        }
    };

    return (
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

            {isModalOpen && (
                <div className={modalOverlay} onClick={closeModal}>
                    <div className={modalContent} onClick={(e) => e.stopPropagation()}>
                        {isUploading && (
                            <div className={uploadingIndicator}>
                                <div className={`loader-container ${isUploadComplete ? 'hidden' : ''}`}>
                                    <div className={loader}></div>
                                    <div className={`checkmark ${isUploadComplete ? 'visible' : ''}`}></div>
                                </div>
                                <p className={fileUploadText}>파일 업로드 중...</p>
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
    );
};

export default FileUploadModal;