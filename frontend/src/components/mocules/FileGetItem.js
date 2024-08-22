import React from 'react';
import { _FileItem, _FileName } from "../../assets/css/Form.css";
import { useParams } from 'react-router-dom';

const FileGetItem = ({ files }) => {
    console.log(files)
    console.log(typeof files);
    const { id } = useParams();
    console.log(id)
    console.log("id type: ", typeof id)

    // 파일 이름 변경 추후에 수정..
    // const extractFileNameFromUUID = (url) => {
    //     if (typeof url !== 'string') {
    //         console.error('URL is not a string:', url);
    //         return "파일 이름 없음";
    //     }
    //
    //     console.log("Full URL: ", url);
    //
    //     // 파일 이름을 추출하기 위한 정규식 적용
    //     const match = url.match(/([a-zA-Z0-9-]{36})([a-zA-Z0-9_.-]+\.[a-zA-Z]{3,4})$/);
    //     console.log("Match: ", match);
    //
    //     return match ? match[0] : "파일 이름 없음";
    // };
    //
    // console.log(extractFileNameFromUUID(files));

    return (
        <div className={_FileItem}>
            {files !== null ? (
                <a
                    href={files}
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
