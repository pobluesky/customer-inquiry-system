import axiosInstance from '../utils/axiosInstance'

export const postOffersheet = async (inquiryId, offerSheetData) => {
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

export const getOfferSheets = async (inquiryId) => {
    try {
        const response = await axiosInstance.get(`/offersheet/${inquiryId}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching offer sheet:', error);
        throw error;
    }
}