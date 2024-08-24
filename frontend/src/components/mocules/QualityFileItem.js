import React from 'react';
import { _FileItem, _FileName } from '../../assets/css/Form.css';
import { useParams } from 'react-router-dom';

const QualityFileItem = ({ qualityFiles }) => {
    console.log("QualityFileItem", qualityFiles);
    return (
        <div className={_FileItem}>
            {qualityFiles.length === 1 ? (
                qualityFiles.map((file, index) => {
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

export default QualityFileItem;