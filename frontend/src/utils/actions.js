// actions.js
export const actions = {
  "초기화": () => {
    if (window.confirm("모든 내용을 초기화 하시겠습니까?")) {
      alert("요청되었습니다.");
    }
  },
  "임시저장": () => {
    if (window.confirm("작성한 내용을 임시저장 하시겠습니까?")) {
      alert("요청되었습니다.");
    }
  },
  "삭제": () => {
    if (window.confirm("Inquiry를 삭제하시겠습니까?")) {
      alert("요청되었습니다.");
    }
  },
  "검토의뢰": () => {
    if (window.confirm("[최종 제출] 해당 Inquiry 검토를 의뢰하시겠습니까?")) {
      alert("요청되었습니다.");
    }
  },
  "품질검토요청": () => {
    if (window.confirm("품질 담당자에게 검토를 요청하시겠습니까?")) {
      alert("요청되었습니다.");
    }
  },
  "1차검토완료": () => {
    if (window.confirm("1차 검토를 완료하시겠습니까?")) {
      alert("1차 검토가 완료되었습니다.");
    }
  },
  "최종검토완료": () => {
    if (window.confirm("최종 검토를 완료하시겠습니까?")) {
      alert("최종 검토가 완료되었습니다.");
    }
  },
  "품질검토완료": () => {
    if (window.confirm("품질 검토 완료 결과를 전달하시겠습니까?")) {
      alert("내용이 전달되었습니다.");
    }
  },
  "닫기": () => {
    alert("닫기 버튼이 클릭되었습니다.");
  }
};
