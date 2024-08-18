export const getQuestionByuserId = async (userId, token) => {
    try {
        const response = await fetch(`/api/questions/customer/${userId}`, {
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

export const getAllQuestion = async (token) => {
    try {
        const response = await fetch('/api/questions/managers', {
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

export const getQuestionByQuestionId = async (questionId, token) => {
    try {
        const response = await fetch(`/api/questions/manager/${questionId}`, {
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