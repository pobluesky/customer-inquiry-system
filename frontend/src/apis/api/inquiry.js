import axiosInstance from "../utils/axiosInstance";

const createFormData = (data) => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    if (key === 'files') {
      // 파일 데이터는 직접 append
      formData.append('files', data.files);
    } else {
      // 일반 텍스트 데이터는 그냥 append
      formData.append(key, data[key]);
    }
  });

  return formData;
};

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

// 고객사 Inquiry 등록
export const postInquiry = async (userId, inquiryData) => {
  try {
    const formData = createFormData(inquiryData);

    const response = await axiosInstance.post(
        `/customers/inquiries/${userId}`,
        formData,
    );

    return response.data;
  } catch (error) {
    console.error('Error posting inquiry:', error);
    throw error;
  }
};
