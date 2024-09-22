import React, { useEffect, useState } from 'react';
import { _FileItem, _FileName, _FileNameColumn } from "../../assets/css/Form.css";

const FileGetItem = ({ pastFile, filePath, currentFile }) => {
    const [isFileUpdate, setIsFileUpdate] = useState(false);

    useEffect(() => {
        if (typeof currentFile !== 'undefined') {
            setIsFileUpdate(true);
        }
   }, [pastFile, currentFile]);

    return (
        <div className={_FileItem}>
            {(typeof pastFile === 'undefined' || pastFile === null)
            && typeof currentFile === 'undefined' ? (
                <div style={{ display: 'flex', marginLeft: '25px' }}>
                    <div className={_FileNameColumn}>첨부파일명</div>
                    |
                <div style={{ marginLeft: '30px' }}>파일 없음</div>
                </div>
            ) : (
                <div style={{ display: 'flex', marginLeft: '25px' }}>
                <div className={_FileNameColumn}>첨부파일명</div>
                    |
                <a
                    href={filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={_FileName}
                >
                    {isFileUpdate ? currentFile : pastFile}
                </a>
                </div>
                )}
        </div>
    );
};

export default FileGetItem;
