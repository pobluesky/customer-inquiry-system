import React from 'react';
import { _FileItem, _FileName } from "../../assets/css/Form.css";

const FileItem = ({ files }) => {
    return (
        <div className={_FileItem}>
            {files.length > 0 ? (
                files.map((file, index) => (
                    <div className={_FileName} key={index}>{file.name}</div>
                ))
                ) : (
                <div>파일 없음</div>
                )}
        </div>
    );
};

export default FileItem;
