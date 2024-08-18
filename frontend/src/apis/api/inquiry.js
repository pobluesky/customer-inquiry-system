import axiosInstance from "../utils/axiosInstance";

export const getInquiry = async (userId) => {
  try {
    const response = await axiosInstance.get(`/customers/inquiries/${userId}`);
    console.log("[getInquiry - 1]: ", response);
    console.log("[getInquiry - 2]: ", response.data);
    return response.data;

  } catch (error) {
    console.error('Error fetching Inquiry:', error);
    throw error;
  }
};
