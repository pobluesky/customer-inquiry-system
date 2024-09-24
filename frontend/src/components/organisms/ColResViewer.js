import React, { useState } from 'react';
import dompurify from 'dompurify';
import { VocButton } from '../atoms/VocButton';
import { SuccessAlert } from '../../utils/actions';
import { getCookie } from '../../apis/utils/cookies';
import { putCompleteByQuality } from '../../apis/api/collaboration';
import { Col_Res_Viewer } from '../../assets/css/Voc.css';

export default function ColResViewer({ colDetail, setEditMode, setColDetail }) {
    const sanitizer = dompurify.sanitize;

    const role = getCookie('userRole');

    const [showSuccessAlert, canShowSuccessAlert] = useState(false);
    const [message, setMessage] = useState('');

    const fetchPutCompleteCol = async () => {
        try {
            const response = await putCompleteByQuality(colDetail?.colId);
            setColDetail(response.data);
            setMessage('협업이 완료되었습니다.');
            canShowSuccessAlert(true);
            setTimeout(() => {
                window.location.reload();
            }, '1000');
        } catch (error) {
            console.error('협업 완료 실패: ', error);
        }
    };

    const filesEllipsis = {
        maxWidth: '144px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    };

    const tagBackgroundColor = (status) => {
        switch (status) {
            case 'COMPLETE':
                return '#DBEDDB';
            case 'READY':
                return '#F5E0E9';
            case 'REFUSE':
                return '#EFEFEE';
            case 'INPROGRESS':
                return '#D3E5EF';
        }
    };

    const getStatusLabel = (status) => {
        switch (status) {
            case 'READY':
                return '협업 대기';
            case 'REFUSE':
                return '협업 거절';
            case 'COMPLETE':
                return '협업 완료';
            case 'INPROGRESS':
                return '협업 수락';
        }
    };

    return (
        <>
            <div className={Col_Res_Viewer}>
                <div>
                    <div>
                        <div
                            style={{
                                backgroundColor: tagBackgroundColor(
                                    colDetail?.colStatus,
                                ),
                            }}
                        >
                            {getStatusLabel(colDetail?.colStatus)}
                        </div>
                        <div>협업 요청 피드백</div>
                        <div style={filesEllipsis}>
                            <a href={colDetail?.filePath} download>
                                {colDetail?.fileName}
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>2024-08-26 11:00</div>
                        <div>
                            {colDetail?.colManagerToResponseDto.department} 부서{' '}
                            <strong>
                                {colDetail?.colManagerToResponseDto.name}
                            </strong>{' '}
                            품질 담당자가{' '}
                            {colDetail?.colManagerFromResponseDto.department}{' '}
                            부서{' '}
                            <strong>
                                {colDetail?.colManagerFromResponseDto.name}
                            </strong>{' '}
                            판매 담당자에게 작성한 피드백입니다.
                        </div>
                    </div>
                    {/* 내용 */}
                    <div
                        dangerouslySetInnerHTML={{
                            __html: sanitizer(`${colDetail.colReply || ''}`),
                        }}
                    />
                </div>
                <div>
                    {colDetail?.colStatus !== 'COMPLETE' &&
                    role === 'quality' ? (
                        <>
                            <VocButton
                                btnName={'피드백 수정'}
                                backgroundColor={'#03507d'}
                                textColor={'#ffffff'}
                                onClick={() => {
                                    setEditMode(true);
                                }}
                            />
                            <VocButton
                                btnName={'협업 완료'}
                                backgroundColor={'#03507d'}
                                textColor={'#ffffff'}
                                margin={'0 0 0 24px'}
                                onClick={() => {
                                    window.confirm(
                                        '협업을 완료하면 수정이 불가능합니다. 정말 완료하시겠습니까?',
                                    )
                                        ? fetchPutCompleteCol()
                                        : '';
                                }}
                            />
                        </>
                    ) : (
                        ''
                    )}
                </div>
            </div>
            <SuccessAlert
                showAlert={showSuccessAlert}
                onClose={() => {
                    canShowSuccessAlert(false);
                }}
                message={message}
                inert
            />
        </>
    );
}