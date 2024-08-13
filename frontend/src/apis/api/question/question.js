export const getQuestionByCustomerId = async (customerId, token) => {
    try {
        const response = await fetch(`/api/question/customer/${customerId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
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
