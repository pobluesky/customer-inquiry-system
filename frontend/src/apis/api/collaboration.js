import axiosInstance from '../utils/axiosInstance';

// 협업 목록 요약 조회
export const getAllCollaboration = async () => {
    try {
        const response = await axiosInstance.get('/collaborations');

        if (response.data.result === 'success') {
            return response.data;
        } else {
            console.error('요약 조회 데이터 패치 실패 원인:', data.message);
            return [];
        }
    } catch (error) {
        console.error('요약 조회 API 에러 원인:', error.response.data.message);
        return [];
    }
};

// 협업 목록 상세 조회
export const getCollaborationDetail = async (questionId, colId) => {
    try {
        const response = await axiosInstance.get(
            `/collaborations/${questionId}/${colId}`,
        );

        if (response.data.result === 'success') {
            return response.data;
        } else {
            console.error('상세 조회 데이터 패치 실패 원인:', data.message);
            return [];
        }
    } catch (error) {
        console.error('상세 조회 API 에러 원인:', error.response.data.message);
        return [];
    }
};

// 협업 요청 (판매 담당자)
export const postCollaborationBySales = async (
    colData,
    questionId,
    // colReqId,
    // colResId,
    // colContents,
) => {
    try {
        const formData = new FormData();
        const blobCollaborationData = new Blob([JSON.stringify(colData)], {
            type: 'application/json',
        });
        formData.append('collaboration', blobCollaborationData);

        if (file) {
            formData.append('files', file);
        }

        const response = await axiosInstance.post(
            `/collaborations/${questionId}`,
            {
                body: formData,
            },
        );

        if (!response.ok) {
            throw `${response.status} ${response.statusText}`;
        }

        const json = await response.json();

        if (json.result !== 'success') {
            throw json.message;
        }

        return json;
    } catch (err) {
        console.error(err);
    }
};

// 협업 수락/거절 (품질 담당자)
export const putDecisionByQuality = async (
    file,
    colId,
    colData,
    // colReqId,
    // colResId,
    // colReply,
    // isAccepted,
    token,
) => {
    try {
        const formData = new FormData();
        const blobCollaborationData = new Blob([JSON.stringify(colData)], {
            type: 'application/json',
        });
        formData.append('collaboration', blobCollaborationData);

        if (file) {
            formData.append('files', file);
        }

        const response = await fetch(`/api/collaborations/${colId}/decision`, {
            method: 'PUT',
            headers: {
                Authorization: `${token}`,
            },
            body: formData,
        });

        if (!response.ok) {
            throw `${response.status} ${response.statusText}`;
        }

        const json = await response.json();

        if (json.result !== 'success') {
            throw json.message;
        }

        return json;
    } catch (err) {
        console.error(err);
    }
};

// 협업 완료 (판매 담당자) ??
export const putCompleteByQuality = async () => {
    try {
        const response = await axiosInstance.put(
            `/collaborations/${colId}/decision/complete`,
        );

        if (!response.ok) {
            throw `${response.status} ${response.statusText}`;
        }

        const json = await response.json();

        if (json.result !== 'success') {
            throw json.message;
        }

        return json;
    } catch (err) {
        console.error(err);
    }
};
