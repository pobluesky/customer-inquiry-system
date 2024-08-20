// 담당자용 답변 전체 조회
export const getAllAnswer = async (token) => {
    try {
        const response = await fetch('/api/answers/managers', {
            headers: {
                'Authorization': `${token}`,
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
                'Authorization': `${token}`,
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
                'Authorization': `${token}`,
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
export const getAnswerByQuestionId = async (questionId, userId, token) => {
    try {
        const response = await fetch(`/api/answers/customers/${userId}/${questionId}`, {
            headers: {
                'Authorization': `${token}`,
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

// 답변 등록
export const postAnswerByQuestionId = async (questionId, token, answerTitle, answerContents, answerFiles) => {
    try {
        const response = await fetch(`/api/answers/managers/${questionId}`, {
            method: 'POST',
            headers: {
                'Authorization': `${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(answerTitle, answerContents, answerFiles),
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
