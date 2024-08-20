import React from 'react';
import { _FileItem, _FileName } from '../../assets/css/Form.css';
import { useParams } from 'react-router-dom';

const FileItem = ({ files }) => {
    console.log(files);
    const { id } = useParams();

    return (
        <div className={_FileItem}>
            {files.length === 1 ? (
                files.map((file, index) => {
                    return (
                        <div key={index} className={_FileName}>
                            {file.name}
                        </div>
                    );
                })
            ) : (
                <div>파일 없음</div>
            )}
        </div>
    );
};

export default FileItem;
