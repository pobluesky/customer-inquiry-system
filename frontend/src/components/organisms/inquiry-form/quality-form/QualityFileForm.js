import React, { useState } from 'react';
import {
    Container,
    Sheet,
    Opend,
    buttonWrapper,
    FileColumn,
} from '../../../../assets/css/Form.css';
import ToggleBar from '../../../mocules/ToggleBar';
import Button from '../../../atoms/Button';
import FileItem from '../../../mocules/FileItem';
import QualityFileItem from '../../../mocules/QualityFileItem';

const QualityFileForm = ({ fileForm, formData, handleFormDataChange }) => {
    const [isChecked, setCheck] = useState(true);
    const [qualityFiles, setQualityFiles] = useState(formData.qualityFiles || null);

    const btnName = ['파일업로드', '파일삭제'];

    const handleFileUpload = (event) => {
        const selectedFile = event.target.files[0];
        setQualityFiles(selectedFile);
        handleFormDataChange('qualityFiles', selectedFile);
    };

    const handleFileDelete = () => {
        setQualityFiles(null);
        handleFormDataChange('qualityFiles', null);
    };

    const isUploadSection = fileForm === '품질검토 파일첨부' || fileForm === '첨부파일';

    return (
        <div className={Container} style={{ marginTop: '-2vh' }}>
            <div className={Sheet}>
                <ToggleBar
                    title={fileForm}
                    isChecked={isChecked}
                    setCheck={setCheck}
                />
                {isChecked ? (
                    <div className={Opend}>
                        {isUploadSection ? (
                            <div>
                                <div className={buttonWrapper}>
                                    <input
                                        type="file"
                                        onChange={handleFileUpload}
                                        style={{ display: 'none' }}
                                        id="fileUploadInput"
                                    />
                                    <Button
                                        onClick={() =>
                                            document
                                                .getElementById(
                                                    'fileUploadInput',
                                                )
                                                .click()
                                        }
                                        btnName={btnName[0]}
                                        margin={'-0.5vw 0.7vw 0 0.3vw'}
                                        backgroundColor={'#03507d'}
                                        textColor={'#ffffff'}
                                        border={'none'}
                                        borderRadius={'18px'}
                                        fontSize={'17px'}
                                        fontWeight={'500'}
                                        padding={'10px'}
                                    />
                                    <Button
                                        onClick={handleFileDelete}
                                        btnName={btnName[1]}
                                        margin={'-0.5vw 0.7vw 0 0.3vw'}
                                        backgroundColor={'#03507d'}
                                        textColor={'#ffffff'}
                                        border={'none'}
                                        borderRadius={'18px'}
                                        fontSize={'17px'}
                                        fontWeight={'500'}
                                        padding={'10px'}
                                    />
                                </div>
                                {/* 컬럼 라벨 */}
                                <div className={FileColumn}>
                                    <div>진행단계</div>
                                    <div>첨부파일명</div>
                                </div>
                                {/* 파일 목록 */}
                                <QualityFileItem
                                    qualityFiles={qualityFiles ? [qualityFiles] : []}
                                />
                            </div>
                        ) : (
                            <div>
                                {/* 협업첨부파일의 경우 */}
                                <div className={FileColumn}>
                                    <div>진행단계</div>
                                    <div>첨부파일명</div>
                                </div>
                                <FileItem
                                    files={
                                        qualityFiles
                                            ? [qualityFiles]
                                            : ['조회된 파일이 없습니다.']
                                    }
                                />
                            </div>
                        )}
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default QualityFileForm;