import axiosInstance from '../utils/axiosInstance';

// 협업 목록 요약 조회
export const getAllCollaboration = async (currentPage, filterArgs) => {
    try {
        const response = await axiosInstance.get(
            `/collaborations?page=${currentPage}&${filterArgs}`,
        );

        const json = response.data;

        if (json.result !== 'success') {
            throw new Error(json.message);
        }

        return json;
    } catch (error) {
        console.error('협업 요약 조회 API ERROR: ', error.message || error);
        throw error;
    }
};

// 협업 목록 상세 조회
export const getCollaborationDetail = async (questionId, colId) => {
    try {
        const response = await axiosInstance.get(
            `/collaborations/${questionId}/${colId}`,
        );

        const json = response.data;

        if (json.result !== 'success') {
            throw new Error(json.message);
        }

        return json;
    } catch (error) {
        console.error('협업 상세 조회 API ERROR: ', error.message || error);
        throw error;
    }
};

// 협업 요청 (판매 담당자)
export const postCollaborationBySales = async (file, colData, questionId) => {
    try {
        const formData = new FormData();
        formData.append(
            'collaboration',
            new Blob([JSON.stringify(colData)], {
                type: 'application/json',
            }),
        );

        if (file) {
            formData.append('files', file);
        }

        const response = await axiosInstance({
            method: 'post',
            url: `/collaborations/${questionId}`,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        const json = response.data;

        if (json.result !== 'success') {
            throw new Error(json.message);
        }

        return json;
    } catch (error) {
        console.error('협업 요청 API ERROR: ', error.message || error);
        throw error;
    }
};

// 협업 수락/거절 (품질 담당자)
export const putDecisionByQuality = async (file, colId, colData) => {
    try {
        const formData = new FormData();
        formData.append(
            'collaboration',
            new Blob([JSON.stringify(colData)], {
                type: 'application/json',
            }),
        );

        if (file) {
            formData.append('files', file);
        }

        const response = await axiosInstance({
            method: 'put',
            url: `/collaborations/${colId}/decision`,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        const json = response.data;

        if (json.result !== 'success') {
            throw new Error(json.message);
        }

        return json;
    } catch (error) {
        console.error('협업 수락/거절 API ERROR: ', error.message || error);
        throw error;
    }
};

// 협업 요청/수락/거절 상태 수정 (판매 및 품질담당자)
export const putModifyByManager = async (file, colId, colData) => {
    try {
        const formData = new FormData();
        formData.append(
            'collaboration',
            new Blob([JSON.stringify(colData)], {
                type: 'application/json',
            }),
        );

        if (file) {
            formData.append('files', file);
        }

        const response = await axiosInstance({
            method: 'put',
            url: `/collaborations/${colId}/modify`,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        const json = response.data;

        if (json.result !== 'success') {
            throw new Error(json.message);
        }

        return json;
    } catch (error) {
        console.error(
            '협업 수락/거절 수정 API ERROR: ',
            error.message || error,
        );
        throw error;
    }
};

// 협업 완료 (품질 담당자)
export const putCompleteByQuality = async (colId) => {
    try {
        const response = await axiosInstance.put(
            `/collaborations/${colId}/decision/complete`,
        );

        const json = response.data;

        if (json.result !== 'success') {
            throw new Error(json.message);
        }

        return json;
    } catch (error) {
        console.error('협업 완료 API ERROR: ', error.message || error);
        throw error;
    }
};

// 질문 페이지에서 협업 여부 조회
export const isCollaborated = async (questionId) => {
    try {
        const response = await axiosInstance.get(
            `/collaborations/${questionId}`,
        );

        const json = response.data;

        if (json.result !== 'success') {
            throw new Error(json.message);
        }

        return json;
    } catch (error) {
        console.log('해당 질문은 협업 진행되지 않음');
        throw error;
    }
};
