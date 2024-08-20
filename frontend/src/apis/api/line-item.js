// 고객사 LineItem 등록
export const postLineItems = async (inquiryId, lineItemData) => {
    try {
        const response = await axiosInstance.post(
            `/line-items/${inquiryId}`,
            lineItemData,
        );
        console.log(lineItemData);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error posting line item:', error);
        throw error;
    }
};