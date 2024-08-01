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
    INQUIRY_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "I0001", "존재하지 않는 문의입니다."),
    REVIEW_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "R0001", "존재하지 않는 검토입니다."),
    OFFERSHEET_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "O0001", "존재하지 않는 OfferSheet입니다.");

    private HttpStatus status;
    private String code;
    private String message;
}

