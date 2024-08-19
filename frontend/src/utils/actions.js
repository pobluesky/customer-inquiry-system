export const actions = {
    초기화: () => {
        if (window.confirm('모든 내용을 초기화 하시겠습니까?')) {
            alert('요청되었습니다.');
        }
    },
    임시저장: () => {
        if (window.confirm('작성한 내용을 임시저장 하시겠습니까?')) {
            alert('요청되었습니다.');
        }
    },
    삭제: () => {
        if (window.confirm('Inquiry를 삭제하시겠습니까?')) {
            alert('요청되었습니다.');
        }
    },
    검토의뢰: () => {
        if (
            window.confirm('[최종 제출] 해당 Inquiry 검토를 의뢰하시겠습니까?')
        ) {
            alert('요청되었습니다.');
        }
    },
    품질검토요청: () => {
        if (window.confirm('품질 담당자에게 검토를 요청하시겠습니까?')) {
            alert('요청되었습니다.');
        }
    },
    '1차검토완료': () => {
        if (window.confirm('1차 검토를 완료하시겠습니까?')) {
            alert('1차 검토가 완료되었습니다.');
        }
    },
    최종검토완료: () => {
        if (window.confirm('최종 검토를 완료하시겠습니까?')) {
            alert('최종 검토가 완료되었습니다.');
        }
    },
    품질검토완료: () => {
        if (window.confirm('품질 검토 완료 결과를 전달하시겠습니까?')) {
            alert('내용이 전달되었습니다.');
        }
    },
    닫기: () => {
        alert('닫기 버튼이 클릭되었습니다.');
    },
};

import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Swal from 'sweetalert2';

const ManagerRoleIsNullAlert = ({ showAlert, onClose }) => {
    return (
        <Snackbar
            autoHideDuration={2000}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            open={showAlert}
            onClose={onClose}
        >
            <Alert severity="error" sx={{ width: '336px' }}>
                권한을 선택하세요.
            </Alert>
        </Snackbar>
    );
};

const JoinCompleteAlert = () => {
    Swal.fire({
        icon: 'success',
        titleText: '회원가입이 완료되었습니다.',
        text: '잠시 후 로그인 페이지로 이동합니다.',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        allowOutsideClick: false
    });
};

const JoinFailedAlert = (message) => {
    Swal.fire({
        icon: 'error',
        titleText: '회원가입 실패',
        text: `${message}`,
        showConfirmButton: false,
        timer: 1000,
        allowOutsideClick: false
    });
};

const LoginCompleteAlert = () => {
    Swal.fire({
        icon: 'success',
        titleText: '로그인이 완료되었습니다.',
        text: '잠시 후 메인 화면으로 이동합니다.',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        allowOutsideClick: false
    });
};

const LoginFailedAlert = ({ showAlert, onClose, message }) => {
    return (
        <Snackbar
            autoHideDuration={2000}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            open={showAlert}
            onClose={onClose}
        >
            <Alert severity="error" sx={{ width: '336px' }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export {
    ManagerRoleIsNullAlert,
    JoinCompleteAlert,
    JoinFailedAlert,
    LoginCompleteAlert,
    LoginFailedAlert,
};
