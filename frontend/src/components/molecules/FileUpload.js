import React, { useState } from 'react';
import {
    fileUploadContainer,
    fileUploadLabel,
    uploadingIndicator,
    loader,
    progressBarContainer,
    progressBar,
    progressText,
} from '../../assets/css/FileUpload.css';

const FileUpload = () => {
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [isUploading, setIsUploading] = useState(false);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setIsUploading(true);
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

    return (
        <div className={fileUploadContainer}>
            <label className={fileUploadLabel} htmlFor="file-upload-input">
                <input
                    type="file"
                    id="file-upload-input"
                    onChange={handleFileUpload}
                    style={{ display: 'none' }}
                />
                <span>파일 선택</span>
            </label>

            {isUploading && (
                <div className={uploadingIndicator}>
                    <div className={loader}></div>
                    <p>파일 업로드 중...</p>
                </div>
            )}

            <div className={progressBarContainer}>
                <div
                    className={progressBar}
                    style={{ width: `${uploadPercentage}%` }}
                ></div>
            </div>

            <p className={progressText}>{uploadPercentage}% 완료</p>
        </div>
    );
};

export default FileUpload;
