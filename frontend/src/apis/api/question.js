// 담당자용 질문 전체 조회
export const getAllQuestion = async (filterArgs, token) => {
    try {
        const response = await fetch(`/api/questions/managers?${filterArgs}`, {
            headers: {
                Authorization: `${token}`,
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();

        if (data.result === 'success') {
            return data.data;
        } else {
            console.error('Failed to fetch data:', data.message);
            return [];
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

// 담당자용 질문 상세 조회
export const getQuestionByQuestionIdForManager = async (questionId, token) => {
    try {
        const response = await fetch(`/api/questions/managers/${questionId}`, {
            headers: {
                Authorization: `${token}`,
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();

        if (data.result === 'success') {
            return data.data;
        } else {
            console.error('Failed to fetch data:', data.message);
            return [];
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

// 고객별 질문 전체 조회
export const getQuestionByUserId = async (userId, filterArgs, token) => {
    try {
        const response = await fetch(
            `/api/questions/customers/${userId}?${filterArgs}`,
            {
                headers: {
                    Authorization: `${token}`,
                    'Content-Type': 'application/json',
                },
            },
        );
        const data = await response.json();

        if (data.result === 'success') {
            return data.data;
        } else {
            console.error('Failed to fetch data:', data.message);
            return [];
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

// 고객사용 질문 상세 조회
export const getQuestionByQuestionId = async (userId, questionId, token) => {
    try {
        const response = await fetch(
            `/api/questions/customers/${userId}/${questionId}`,
            {
                headers: {
                    Authorization: `${token}`,
                    'Content-Type': 'application/json',
                },
            },
        );
        const data = await response.json();

        if (data.result === 'success') {
            return data.data;
        } else {
            console.error('Failed to fetch data:', data.message);
            return [];
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

// Inquiry 관련 질문 등록 추가
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
