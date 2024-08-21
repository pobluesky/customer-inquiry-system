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
    questionId,
    token,
    answerTitle,
    answerContents,
    // answerFiles,
    answerFileName,
    answerFilePath,
) => {
    try {
        const response = await fetch(`/api/answers/managers/${questionId}`, {
            method: 'POST',
            headers: {
                Authorization: `${token}`,
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify(answerTitle, answerContents, answerFiles),
            body: JSON.stringify(answerTitle, answerContents, answerFileName, answerFilePath),
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

// 파일 업로드
export const uploadFile = async (file, token) => {
    try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('/api/upload', {
            method: 'POST',
            headers: {
                Authorization: `${token}`,
            },
            body: formData,
        });

        if (!response.ok) {
            throw new Error('File upload failed');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('File upload failed:', error);
        throw error;
    }
};
