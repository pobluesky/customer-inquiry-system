export const getAnswerAndQuestionByuserId = async (userId, token) => {
    try {
        const response = await fetch(`/api/answers/customer/complex/${userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
            return [];
        }

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
