package com.pobluesky.backend.domain.answer.dto.response;

import com.pobluesky.backend.domain.answer.entity.Answer;

import lombok.Builder;

import java.time.LocalDateTime;
import java.util.Optional;

@Builder
public record AnswerResponseDTO(
    Long questionId,
    Optional<Long> inquiryId,
    Long userId,
    Long managerId,
    String title,
    String contents,
    String fileName,
    String filePath,
    LocalDateTime createdDate
) {
    public static AnswerResponseDTO from(Answer answer, Long managerId) { // 매니저 아이디를 파라미터로 추가
        return AnswerResponseDTO.builder()
            .inquiryId(Optional.ofNullable(answer.getInquiry())
                .map(inquiry -> inquiry.getInquiryId()))
            .questionId(answer.getQuestion().getQuestionId())
            .userId(answer.getCustomer().getUserId())
            .managerId(managerId)
            .title(answer.getTitle())
            .contents(answer.getContents())
            .createdDate(answer.getCreatedDate())
            .fileName(answer.getFileName())
            .filePath(answer.getFilePath())
            .build();
    }
}
