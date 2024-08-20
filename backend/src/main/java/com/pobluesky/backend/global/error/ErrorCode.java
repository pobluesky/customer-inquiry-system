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
    ALREADY_EXISTS_EMAIL(HttpStatus.INTERNAL_SERVER_ERROR, "U0004","이미 존재하는 이메일입니다."),
    REQ_MANAGER_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "U0002", "존재하지 않는 요청 담당자입니다."),
    RES_MANAGER_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "U0003", "존재하지 않는 응답 담당자입니다."),
    INQUIRY_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "I0001", "존재하지 않는 문의입니다."),
    INVALID_ORDER_CONDITION(HttpStatus.INTERNAL_SERVER_ERROR, "I0002", "올바르지 않은 정렬 조건입니다."),
    REVIEW_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "R0001", "존재하지 않는 검토입니다."),
    REVIEW_ALREADY_EXISTS(HttpStatus.INTERNAL_SERVER_ERROR, "R0002", "해당 Inquiry에는 이미 제출된 검토가 존재합니다."),
    INVALID_PRODUCT_TYPE(HttpStatus.INTERNAL_SERVER_ERROR, "P0001", "유효하지 않은 제품 유형입니다."),
    LINE_ITEM_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "I0001", "존재하지 않는 라인아이템입니다."),
    QUALITY_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "Q0001", "존재하지 않는 품질입니다."),
    QUALITY_REVIEW_INFO_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "Q0002", "존재하지 않는 품질검토정보입니다."),
    QUALITY_ALREADY_EXISTS(HttpStatus.INTERNAL_SERVER_ERROR, "Q0003", "해당 Inquiry에는 이미 제출된 품질이 존재합니다."),
    OFFERSHEET_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "O0001", "존재하지 않는 오퍼시트입니다."),
    NOTIFICATION_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "N0001", "존재하지 않는 알림입니다."),
    INVALID_TOKEN(HttpStatus.INTERNAL_SERVER_ERROR, "G0003","권한 정보가 없는 토큰입니다."),
    PROGRESS_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "P0002", "존재하지 않는 진행단계입니다."),
    QUESTION_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "Q0001", "존재하지 않는 질문입니다."),
    QUESTION_STATUS_COMPLETED(HttpStatus.INTERNAL_SERVER_ERROR, "Q0003", "이미 답변이 완료된 질문입니다."),
    ANSWER_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "A0001", "존재하지 않는 답변입니다."),
    COLLABORATION_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "C0001", "존재하지 않는 협업입니다."),
    COLLABORATION_ALREADY_EXISTS(HttpStatus.INTERNAL_SERVER_ERROR, "C0002", "이미 존재하는 협업입니다."),
    COLLABORATION_STATUS_COMPLETED(HttpStatus.INTERNAL_SERVER_ERROR, "C0003", "이미 완료된 협업입니다."),
    COLLABORATION_STATUS_REFUSED(HttpStatus.INTERNAL_SERVER_ERROR, "C0004", "이미 거절된 협업입니다."),
    INVALID_PASSWORD(HttpStatus.INTERNAL_SERVER_ERROR, "U0005", "비밀번호가 틀립니다."),
    RESMANAGER_NOT_MACHED(HttpStatus.INTERNAL_SERVER_ERROR, "U0006", "해당 협업의 응답 담당자가 아닙니다."),
    USER_NOT_MATCHED(HttpStatus.INTERNAL_SERVER_ERROR, "U0007","적합한 사용자가 아닙니다."),
    UNAUTHORIZED_USER_SALES(HttpStatus.INTERNAL_SERVER_ERROR, "U0008", "판매 담당자가 아닙니다."),
    UNAUTHORIZED_USER_QUALITY(HttpStatus.INTERNAL_SERVER_ERROR, "U0009", "품질 담당자가 아닙니다."),
    UNAUTHORIZED_USER_CUSTOMER(HttpStatus.INTERNAL_SERVER_ERROR, "U0010", "고객사가 아닙니다."),
    UNAUTHORIZED_USER_MANAGER(HttpStatus.INTERNAL_SERVER_ERROR, "U0011", "담당자가 아닙니다."),
    RECEIPT_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR, "R0001", "존재하지 않는 내역입니다.");

    private HttpStatus status;
    private String code;
    private String message;
}
