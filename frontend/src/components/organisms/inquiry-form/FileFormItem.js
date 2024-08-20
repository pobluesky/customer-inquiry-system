import React, { useState } from 'react';
import { Container, Sheet, Opend, buttonWrapper, FileColumn } from "../../../assets/css/Form.css";
import ToggleBar from "../../mocules/ToggleBar";
import FileGetItem from '../../mocules/FileGetItem';

const FileFormItem = ({ fileForm, formData }) => {
    const [isChecked, setCheck] = useState(true);
    const [files, setFiles] = useState(formData.files);

    const isUploadSection = fileForm === "첨부파일";

    console.log(formData.files);  // files 배열을 확인하기 위해 로그 추가

    return (
        <div className={Container} style={{ marginTop: "-2vh" }}>
            <div className={Sheet}>
                <ToggleBar title={fileForm} isChecked={isChecked} setCheck={setCheck} />
                {isChecked && (
                    <div className={Opend}>
                        <div className={FileColumn}>
                            <div>진행단계</div>
                            <div>첨부파일명</div>
                        </div>
                        <FileGetItem files={formData.files} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default FileFormItem;
