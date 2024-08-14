// 이름
export const validateName = (name) => {
    if (name.trim() === '') {
        return '이름을 입력해주세요.';
    }
    return '';
};

// 고유 코드
export const validateUserCode = (userCode) => {
    const codeRegex = /^(CUS|EMP)/;
    if (!codeRegex.test(userCode)) {
      return '인증되지 않는 코드입니다.';
    }
    return '';
  };

// 이메일
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return '이메일 형식이 올바르지 않습니다.';
    }
    return '';
};

// 전화번호
export const validatePhone = (phone) => {
    const phoneRegex = /^\d{10,11}$/;
    if (!phoneRegex.test(phone)) {
        return '유효한 전화번호를 입력해주세요.';
    }
    return '';
};

// 비밀번호
export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
        return '특수문자, 숫자를 포함하여 8자리 이상 입력하세요.';
    }
    return '';
};

export const validatePasswordMatch = (password, confirmPassword) => {
    if (password !== confirmPassword) {
        return '비밀번호가 일치하지 않습니다.';
    }
    return '';
};
