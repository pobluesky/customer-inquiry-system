import React, { useState, useEffect } from 'react';
import { Container, Sheet, Opend, buttonWrapper, FileColumn } from "../../../assets/css/Form.css";
import ToggleBar from "../../molecules/ToggleBar";
import Button from '../../atoms/Button';
import FileItem from '../../molecules/FileItem';
import FileGetItem from '../../molecules/FileGetItem';

const FileUpdateForm = ({ fileForm, formData, handleFormDataChange, fileData }) => {
    const [isChecked, setCheck] = useState(true);
    const [files, setFiles] = useState(formData.files || null);
    const [currentFileData, setCurrentFileData] = useState(fileData);

    console.log("files: ", files);
    const btnName = files ? '파일수정' : '파일업로드';

    useEffect(() => {
        if (files) {
            setCurrentFileData({
                pastFiles: fileData.fileName,
                filePath: fileData.filePath,
                currentFiles: files.name,
            });
        }
    }, [files]);

    const handleFileUpload = (event) => {
        const selectedFile = event.target.files[0];
        setFiles(selectedFile);
        handleFormDataChange('files', selectedFile);
    };

    const handleFileDelete = () => {
        setFiles(null);
        handleFormDataChange('files', null);
        setCurrentFileData(null);
    };

    console.log("formData.files: ", formData.files);
    console.log("fileData: ", fileData);
    console.log("currentFileData.pastFiles: ", currentFileData.pastFiles);
    console.log("currentFileData.filePath: ", currentFileData.filePath);
    console.log("currentFileData.currentFiles: ", currentFileData.currentFiles);

    return (
        <div className={Container} style={{ marginTop: '-2vh' }}>
            <div className={Sheet}>
                <ToggleBar title={fileForm} isChecked={isChecked} setCheck={setCheck} />
                {isChecked ? (
                    <div className={Opend}>
                        {files ? (
                            <>
                                <div className={buttonWrapper}>
                                    <input
                                        type="file"
                                        onChange={handleFileUpload}
                                        style={{ display: 'none' }}
                                        id="fileUpdateInput"
                                    />
                                    <Button
                                        onClick={() =>
                                            document.getElementById('fileUpdateInput').click()
                                        }
                                        btnName={btnName}
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
                                        btnName={'파일삭제'}
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
                                <div className={FileColumn}>
                                    <div>진행단계</div>
                                    <div>첨부파일명</div>
                                </div>
                                <FileGetItem
                                    pastFile={currentFileData?.pastFiles}
                                    filePath={currentFileData?.filePath}
                                    currentFile={currentFileData?.currentFiles}
                                />
                            </>
                        ) : (
                            <>
                                <div className={buttonWrapper}>
                                    <input
                                        type="file"
                                        onChange={handleFileUpload}
                                        style={{ display: 'none' }}
                                        id="fileUploadInput"
                                    />
                                    <Button
                                        onClick={() =>
                                            document.getElementById('fileUploadInput').click()
                                        }
                                        btnName={btnName}
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
                                <div className={FileColumn}>
                                    <div>진행단계</div>
                                    <div>첨부파일명</div>
                                </div>
                                <FileItem files={[]} />
                            </>
                        )}
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default FileUpdateForm;
