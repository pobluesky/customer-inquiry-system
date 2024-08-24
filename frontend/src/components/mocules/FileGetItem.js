import React from 'react';
import { _FileItem, _FileName } from "../../assets/css/Form.css";

const FileGetItem = ({ files, filePath }) => {
    return (
        <div className={_FileItem}>
            {files !== null ? (
                <a
                    href={filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={_FileName}
                 >
                {files}
                </a>
        ) : (
                <div>파일 없음</div>
            )}
        </div>
    );
};

export default FileGetItem;
