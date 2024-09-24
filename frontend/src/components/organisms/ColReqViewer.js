import React from 'react';
import { useNavigate } from 'react-router-dom';
import dompurify from 'dompurify';
import { VocButton } from '../atoms/VocButton';
import { getCookie } from '../../apis/utils/cookies';
import { Col_Req_Viewer } from '../../assets/css/Voc.css';

export default function ColReqViewer({ colDetail, questionDetail }) {
    const sanitizer = dompurify.sanitize;
    const navigate = useNavigate();

    const role = getCookie('userRole');

    return (
        <div className={Col_Req_Viewer}>
            <div>
                <div>
                    <div>협업 요청 사유</div>
                </div>
                <div>
                    <div>2024-08-26 11:00</div>
                    <div>
                        {colDetail?.colManagerFromResponseDto.department} 부서{' '}
                        <strong>
                            {colDetail?.colManagerFromResponseDto.name}
                        </strong>{' '}
                        판매 담당자가{' '}
                        {colDetail?.colManagerToResponseDto.department} 부서{' '}
                        <strong>
                            {colDetail?.colManagerToResponseDto.name}
                        </strong>{' '}
                        품질 담당자에게 요청한 협업입니다.
                    </div>
                </div>
                <div
                    dangerouslySetInnerHTML={{
                        __html: sanitizer(`${colDetail.colContents || ''}`),
                    }}
                />
            </div>
            <div>
                {colDetail?.colStatus === 'READY' && role === 'sales' && (
                    <VocButton
                        btnName={'요청 수정'}
                        backgroundColor={'#03507d'}
                        textColor={'#ffffff'}
                        onClick={() => {
                            navigate('/voc-form/collaboration/req', {
                                state: {
                                    questionDetail: questionDetail,
                                    colDetail: colDetail,
                                },
                            });
                        }}
                    />
                )}
            </div>
        </div>
    );
}
