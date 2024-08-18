export const getAnswerByQuestionId = async (questionId, token) => {
    try {
        const response = await fetch(`/api/answers/${questionId}`, {
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

export const postAnswerByQuestionId = async (questionId, token, answerTitle, answerContents, answerFiles) => {
    try {
        const response = await fetch(`/api/answers/manager/${questionId}`, {
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
