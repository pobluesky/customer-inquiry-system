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
        const response = await fetch(`/api/questions/customers/${userId}?${filterArgs}`, {
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

// 고객사용 질문 상세 조회
export const getQuestionByQuestionId = async (questionId, userId, token) => {
    try {
        const response = await fetch(`/api/questions/customers/${userId}/${questionId}`, {
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

// 기타 질문 등록
export const postQuestionByUserId = async (userId, token, title, contents, files, type, status ) => {
    try {
        const response = await fetch(`/api/questions/customers/${userId}}`, {
            method: 'POST',
            headers: {
                'Authorization': `${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(title, contents, files, type, status),
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
