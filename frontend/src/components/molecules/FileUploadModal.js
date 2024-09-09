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

const FileUploadModal = () => {
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fileInputRef = useRef(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setIsUploading(true);
        setIsModalOpen(true);

        const fakeUpload = setInterval(() => {
            setUploadPercentage((prev) => {
                const nextPercentage = prev + 10;
                if (nextPercentage >= 100) {
                    clearInterval(fakeUpload);
                    setIsUploading(false);
                    return 100;
                }
                return nextPercentage;
            });
        }, 500);
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
                                <div className={loader}></div>
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
