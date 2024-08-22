// 협업 목록 전체 조회
export const getAllCollaboration = async (filterArgs, token) => {
    try {
        const response = await fetch(`/api/collaborations?${filterArgs}`, {
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
