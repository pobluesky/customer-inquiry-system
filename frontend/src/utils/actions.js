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

/*
    // 잘못된 이름 입력
    const emptyNameAlert = (name) => {
      if (!name) {
          Swal.fire({
              icon: 'warning',
              title: '이름을 입력하세요.',
          });
          return;
      }
      completedName(true);
  };

  // 잘못된 고유 코드 입력
  const wrongCodeAlert = (userCode) => {
      const code = userCode.substring(0, 3);
      if (code !== 'CUS' && code !== 'EMP') {
          return Swal.fire({
              icon: 'warning',
              title: '올바르지 않은 고유 코드입니다.',
          });
      } else if (!code) {
          return Swal.fire({
              icon: 'warning',
              title: '고유 코드를 입력하세요.',
          });
      }
      completedCode(true);
  };

  // 권한 미입력 (담당자)
  const wrongRoleAlert = (role) => {
      if (manager && !role) {
          return Swal.fire({
              icon: 'warning',
              title: '권한을 선택하세요.',
          });
      }
  };

  // 잘못된 이메일 입력
  const wrongEmailAlert = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          return Swal.fire({
              icon: 'warning',
              title: '올바르지 않은 이메일 양식입니다.',
          });
      } else if (!email) {
          return Swal.fire({
              icon: 'warning',
              title: '이메일을 입력하세요.',
          });
      }
  };

  // 잘못된 고객사명 입력 (고객사)
  const wrongCustomerNameAlert = (customerName) => {
      if (!customerName) {
          return Swal.fire({
              icon: 'warning',
              title: '고객사명을 입력하세요.',
          });
      }
  };

  // 잘못된 비밀번호 입력
  const wrongPasswordAlert = (password) => {
      const passwordRegex =
          /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,16}$/;
      if (!passwordRegex.test(password)) {
          return Swal.fire({
              icon: 'warning',
              title: '특수문자, 숫자가 각각 1개 이상 섞인 8자리 이상 16자리 이하의 비밀번호를 입력하세요.',
          });
      } else if (!password) {
          return Swal.fire({
              icon: 'warning',
              title: '비밀번호를 입력하세요.',
          });
      }
  };
  */

/*
      // 회원가입 완료 또는 이미 존재하는 회원일 경우 Alert
    const signUpAlert = (result) => {
        if (result.success) {
            Swal.fire({ icon: 'success', title: '회원가입 완료' });
        } else {
            Swal.fire({ icon: 'error', title: '이미 존재하는 회원입니다.' });
        }
    };

    // 회원가입 실패 Alert
    const errorAlert = () => {
        Swal.fire({ icon: 'error', title: '회원가입 실패' });
    }; */

// Swal.fire({
//     icon: 'error',
//     title: '비밀번호가 일치하지 않습니다.',
// });

// const signUpAlert = (result) => {
//     if (result.success) {
//         Swal.fire({ icon: 'success', title: '회원가입 완료' });
//     } else {
//         Swal.fire({ icon: 'error', title: '이미 존재하는 회원입니다.' });
//     }
// };

// const errorAlert = () => {
//     Swal.fire({ icon: 'error', title: '회원가입 실패' });
// };

    // // 로그인 Alert
    // const signInAlert = (result) => {
    //     if (result.success) {
    //         Swal.fire({ icon: 'success', title: '로그인 완료' });
    //     } else {
    //         Swal.fire({ icon: 'error', title: '존재하지 않는 회원입니다.' });
    //     }
    // };