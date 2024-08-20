import React from 'react';
import { _FileItem, _FileName } from "../../assets/css/Form.css";
import { useParams } from 'react-router-dom';

const FileGetItem = ({ files }) => {
    console.log(files)
    const { id } = useParams();
    console.log(id)
    console.log("id type: ", typeof id)

    const extractFileNameFromUUID = (url) => {
        if (typeof url !== 'string') {
            console.error('URL is not a string:', url);
            return "파일 이름 없음";
        }

        // UUID는 36자, 파일 이름은 UUID 뒤에 위치
        const match = url.match(/([a-zA-Z0-9-]{36})([a-zA-Z0-9_.-]+\.[a-zA-Z]{3,4})$/);
        console.log("match", match);
        return match ? match[2] : "파일 이름 없음";
    };

    return (
        <div className={_FileItem}>
            {files.length > 0 ? (
                files.map((file, index) => {
                    const fileName = extractFileNameFromUUID(file.name);
                    console.log("fileName: ", fileName);
                    return (
                        <a
                            key={index}
                            href={files}
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

export default FileGetItem;
