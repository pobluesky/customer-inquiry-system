import React, { useEffect, useState } from 'react';
import { _FileItem, _FileName } from "../../assets/css/Form.css";

const FileGetItem = ({ pastFile, filePath, currentFile }) => {
    const [isFileUpdate, setIsFileUpdate] = useState(false);

    useEffect(() => {
        if (typeof currentFile !== 'undefined') {
            setIsFileUpdate(true);
        }
   }, [pastFile, currentFile]);

    return (
        <div className={_FileItem}>
            {pastFile !== null ? (
                <a
                    href={filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={_FileName}
                 >
                    {isFileUpdate ? currentFile : pastFile}
                </a>
        ) : (
                <div>파일 없음</div>
            )}
        </div>
    );
};

export default FileGetItem;
