// 담당자용 답변 전체 조회
export const getAllAnswer = async (token) => {
    try {
        const response = await fetch('/api/answers/managers', {
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

// 고객사용 답변 전체 조회
export const getAnswerByUserId = async (userId, token) => {
    try {
        const response = await fetch(`/api/answers/customers/${userId}`, {
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

// 담당자용 답변 상세 조회
export const getAnswerByQuestionIdForManager = async (questionId, token) => {
    try {
        const response = await fetch(`/api/answers/managers/${questionId}`, {
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

// 고객사용 답변 상세 조회
export const getAnswerByQuestionId = async (userId, questionId, token) => {
    try {
        const response = await fetch(
            `/api/answers/customers/${userId}/${questionId}`,
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

// 답변 등록
export const postAnswerByQuestionId = async (
    file,
    answerData,
    questionId,
    token,
) => {
    try {
        const formData = new FormData();
        const blobAnswerData = new Blob([JSON.stringify(answerData)], {
            type: 'application/json',
        });
        formData.append('answer', blobAnswerData);

        if (file) {
            formData.append('files', file);
        }

        const response = await fetch(`/api/answers/managers/${questionId}`, {
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
