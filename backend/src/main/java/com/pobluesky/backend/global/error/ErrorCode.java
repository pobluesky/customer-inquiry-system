package com.pobluesky.backend.global.error;

import lombok.AllArgsConstructor;
import lombok.Getter;

import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum ErrorCode {
    UNKNOWN(HttpStatus.INTERNAL_SERVER_ERROR, "G0001", "알 수 없는 오류가 발생했습니다."),
    INVALID_REQUEST(HttpStatus.INTERNAL_SERVER_ERROR, "G0002", "잘못된 요청입니다."),
    EXTERNAL_SERVER_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "G0003", "외부 서버 오류입니다."),
    USER_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "U0001", "존재하지 않는 사용자입니다."),
    REQ_MANAGER_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "U0002", "존재하지 않는 요청 담당자입니다."),
    RES_MANAGER_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "U0003", "존재하지 않는 응답 담당자입니다."),
    INQUIRY_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "I0001", "존재하지 않는 문의입니다."),
    REVIEW_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "R0001", "존재하지 않는 검토입니다."),
    INVALID_PRODUCT_TYPE(HttpStatus.INTERNAL_SERVER_ERROR, "P0001", "유효하지 않은 제품 유형입니다."),
    LINE_ITEM_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "I0001", "존재하지 않는 라인아이템입니다."),
    QUALITY_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "Q0001", "존재하지 않는 품질입니다."),
    QUALITY_REVIEW_INFO_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "Q0002", "존재하지 않는 품질검토정보입니다."),
    OFFERSHEET_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "O0001", "존재하지 않는 OfferSheet입니다."),
    QUESTION_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "Q0001", "존재하지 않는 질문입니다."),
    QUESTION_STATUS_COMPLETED(HttpStatus.INTERNAL_SERVER_ERROR, "Q0003", "이미 답변이 완료된 질문입니다."),
    COLLABORATION_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "C0001", "존재하지 않는 협업입니다."),
    COLLABORATION_ALREADY_EXISTS(HttpStatus.INTERNAL_SERVER_ERROR, "C0002", "이미 존재하는 협업입니다."),
    COLLABORATION_STATUS_COMPLETED(HttpStatus.INTERNAL_SERVER_ERROR, "C0003", "이미 완료된 협업입니다."),
    COLLABORATION_STATUS_REFUSED(HttpStatus.INTERNAL_SERVER_ERROR, "C0004", "이미 거절된 협업입니다.");

    private HttpStatus status;
    private String code;
    private String message;
}
