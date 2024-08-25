import axiosInstance from '../utils/axiosInstance';

// 담당자용 질문 전체 조회
export const getAllQuestion = async (filterArgs) => {
    try {
        const response = await axiosInstance.get(
            `/questions/managers?${filterArgs}`,
        );

        const json = response.data;

        if (json.result !== 'success') {
            throw new Error(json.message);
        }

        return json;
    } catch (error) {
        console.error(
            '담당자용 질문 요약 조회 API ERROR: ',
            error.message || error,
        );
        throw error;
    }
};

// 담당자용 질문 상세 조회
export const getQuestionByQuestionIdForManager = async (questionId) => {
    try {
        const response = await axiosInstance.get(
            `/questions/managers/${questionId}`,
        );

        const json = response.data;

        if (json.result !== 'success') {
            throw new Error(json.message);
        }

        return json;
    } catch (error) {
        console.error(
            '담당자용 질문 상세 조회 API ERROR: ',
            error.message || error,
        );
        throw error;
    }
};

// 고객별 질문 전체 조회
export const getQuestionByUserId = async (userId, filterArgs) => {
    try {
        const response = await axiosInstance.get(
            `/questions/customers/${userId}?${filterArgs}`,
        );

        const json = response.data;

        if (json.result !== 'success') {
            throw new Error(json.message);
        }
        return json;
    } catch (error) {
        console.error(
            '고객사용 질문 요약 조회 API ERROR: ',
            error.message || error,
        );
        throw error;
    }
};

// 고객사용 질문 상세 조회
export const getQuestionByQuestionId = async (userId, questionId) => {
    try {
        const response = await axiosInstance.get(
            `/questions/customers/${userId}/${questionId}`,
        );

        const json = response.data;

        if (json.result !== 'success') {
            throw new Error(json.message);
        }
        return json;
    } catch (error) {
        console.error(
            '고객사용 질문 상세 조회 API ERROR: ',
            error.message || error,
        );
        throw error;
    }
};

// Inquiry 관련 질문 등록
export const postQuestionByUserIdAboutInquiry = async (
    file,
    questionData,
    userId,
    inquiryId,
    token,
) => {
    try {
        const formData = new FormData();
        const blobQuestionData = new Blob([JSON.stringify(questionData)], {
            type: 'application/json',
        });
        formData.append('question', blobQuestionData);

        if (file) {
            formData.append('files', file);
        }

        const response = await fetch(
            `/api/questions/customers/${userId}/${inquiryId}`,
            {
                method: 'POST',
                headers: {
                    Authorization: `${token}`,
                },
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

// Inquiry 무관 질문 등록
export const postQuestionByUserId = async (
    file,
    questionData,
    userId,
    token,
) => {
    try {
        const formData = new FormData();
        const blobQuestionData = new Blob([JSON.stringify(questionData)], {
            type: 'application/json',
        });
        formData.append('question', blobQuestionData);

        if (file) {
            formData.append('files', file);
        }

        const response = await fetch(`/api/questions/customers/${userId}`, {
            method: 'POST',
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
