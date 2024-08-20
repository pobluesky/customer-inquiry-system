// 담당자용 질문 전체 조회
export const getAllQuestion = async (filterArgs, token) => {
    try {
        const response = await fetch(`/api/questions/managers?${filterArgs}`, {
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

// 담당자용 질문 상세 조회
export const getQuestionByQuestionIdForManager = async (questionId, token) => {
    try {
        const response = await fetch(`/api/questions/managers/${questionId}`, {
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

// 고객별 질문 전체 조회
export const getQuestionByUserId = async (userId, filterArgs, token) => {
    try {
        const response = await fetch(
            `/api/questions/customers/${userId}?${filterArgs}`,
            {
                headers: {
                    Authorization: `${token}`,
                    'Content-Type': 'application/json',
                },
            },
        );
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

// 고객사용 질문 상세 조회
export const getQuestionByQuestionId = async (userId, questionId, token) => {
    try {
        const response = await fetch(
            `/api/questions/customers/${userId}/${questionId}`,
            {
                headers: {
                    Authorization: `${token}`,
                    'Content-Type': 'application/json',
                },
            },
        );
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

// 기타 질문 등록
export const postQuestionByUserId = async (
    userId,
    token,
    title,
    contents,
    files,
    type,
    status,
) => {
    try {
        const response = await fetch(`/api/questions/customers/${userId}`, {
            method: 'POST',
            headers: {
                Authorization: `${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(title, contents, files, type, status),
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

// 파일 업로드 함수
async function uploadFile(filePath) {
    try {
        const response = await fetch('/api/uploadfile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ filePath }),
        });

        const data = await response.json();

        if (data.result === 'success') {
            return data.filePath; // 업로드된 파일 경로 또는 ID 반환
        } else {
            console.error('Failed to upload file:', data.message);
            return null;
        }
    } catch (error) {
        console.error('Error uploading file:', error);
        return null;
    }
}

// postQuestionByUserId 함수 호출과 파일 업로드 결합
export const postQuestionWithFile = async (
    userId,
    token,
    title,
    contents,
    filePath, // 로컬 파일 경로
    type,
    status,
) => {
    // 1. 파일 업로드
    const uploadedFilePath = await uploadFile(filePath);

    if (!uploadedFilePath) {
        console.error('File upload failed. Cannot proceed.');
        return [];
    }

    // 2. 업로드된 파일 경로를 사용하여 postQuestionByUserId 호출
    const response = await postQuestionByUserId(
        userId,
        token,
        title,
        contents,
        [uploadedFilePath], // 업로드된 파일 경로 배열로 전달
        type,
        status,
    );

    return response;
};
