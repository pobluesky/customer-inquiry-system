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
    String title,
    String contents,
    String fileName,
    String filePath,
    LocalDateTime createdDate

) {
    public static AnswerResponseDTO from(Answer answer) {
        return AnswerResponseDTO.builder()
            .inquiryId(Optional.ofNullable(answer.getInquiry())
                .map(inquiry -> inquiry.getInquiryId()))
            .questionId(answer.getQuestion().getQuestionId())
            .userId(answer.getCustomer().getUserId())
            .title(answer.getTitle())
            .contents(answer.getContents())
            .createdDate(answer.getCreatedDate())
            .fileName(answer.getFileName())
            .filePath(answer.getFilePath())
            .build();
    }
}
