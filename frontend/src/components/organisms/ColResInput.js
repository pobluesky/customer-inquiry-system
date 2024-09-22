import React from 'react';
import {
    putDecisionByQuality,
    putCompleteByQuality,
} from '../../apis/api/collaboration';
import { useAuth } from '../../hooks/useAuth';

export default function ColResInput({ colDetail }) {
    const { userId } = useAuth();

    const fetchPutCol = async (isAccepted) => {
        try {
            const colData = {
                colReqId: colReqId,
                colResId: userId,
                colReply: editorValue,
                isAccepted: isAccepted,
            };
            const response = await putDecisionByQuality(file, colId, colData);
            // 협업 수락 또는 거절 후 갱신되는 데이터
            // setStatus(response.data.colStatus);
            // setColStatus(response.data.colStatus);
            // setColReply(response.data.colReply);
            // setFileName(response.data.fileName);
            // setFilePath(response.data.filePath);
            if (response.data.colStatus === 'REFUSE') {
                setMessage('협업이 거절되었습니다.');
            } else {
                setMessage('협업이 수락되었습니다.');
            }
            canShowDoneAlert(true);
            isRejecting(true);
        } catch (error) {
            console.error('협업 수락/거절 실패: ', error);
        }
    };

    return <div>협업 응답 입력란</div>;
}
