import React from 'react';
import { _FileItem, _FileName } from "../../assets/css/Form.css";

const FileItem = ({ files }) => {

    const extractFileNameFromUUID = (url) => {
        // URL이 문자열인지 확인
        if (typeof url !== 'string') {
            return "파일 이름 없음";
        }
        // UUID는 36자, 파일 이름은 UUID 뒤에 위치
        const match = url.match(/([a-zA-Z0-9-]{36})([a-zA-Z0-9_.-]+\.[a-zA-Z]{3,4})$/);
        return match ? match[2] : "파일 이름 없음";
    };

    return (
        <div className={_FileItem}>
            {files && files.length > 0 ? (
                files.map((file, index) => {
                    const fileName = extractFileNameFromUUID(file);
                    return (
                        <a
                            key={index}
                            href={files[0]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={_FileName}
                        >
                            {fileName}
                        </a>
                    );
                })
            ) : (
                <div>파일 없음</div>
            )}
        </div>
    );
};

export default FileItem;
