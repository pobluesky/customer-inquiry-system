import axiosInstance from '../utils/axiosInstance'

export const postOfferSheet = async (inquiryId, offerSheetData) => {
    try {
        const response = await axiosInstance.post(
            `/offersheet/${inquiryId}`,
            offerSheetData,
        );
        console.log(offerSheetData);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error posting offer sheet:', error);
        throw error;
    }
};