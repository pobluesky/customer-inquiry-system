import React, { useState, useEffect } from 'react';
import dompurify from 'dompurify';
import { Col_Req_Viewer } from '../../assets/css/Voc.css';

// 협업 요청 사유 뷰어
export default function ColReqViewer({ colDetail }) {
    const sanitizer = dompurify.sanitize;

    const filesEllipsis = {
        maxWidth: '144px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    };

    return (
        <div className={Col_Req_Viewer}>
            <div>
                <div>협업 요청 사유</div>
                <div style={filesEllipsis}>
                    <a href={colDetail?.filePath} download>
                        {colDetail?.fileName}
                    </a>
                </div>
            </div>
            {/* 협업 요청 날짜, 요청 담당자 정보 */}
            <div>
                <div>2024-08-26 11:00</div>
                <div>
                    {colDetail?.colManagerFromResponseDto.department} 부서
                </div>
                <div>{colDetail?.colManagerFromResponseDto.name} 담당자</div>
            </div>
            {/* 내용 */}
            <div
                dangerouslySetInnerHTML={{
                    __html: sanitizer(`${colDetail.colContents || ''}`),
                }}
            />
        </div>
    );
}
