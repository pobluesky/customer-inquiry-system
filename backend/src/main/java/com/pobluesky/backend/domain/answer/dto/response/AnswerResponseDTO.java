package com.pobluesky.backend.domain.answer.dto.response;

import com.pobluesky.backend.domain.answer.entity.Answer;
import lombok.Builder;

import java.time.LocalDateTime;
import java.util.Optional;

@Builder
public record AnswerResponseDTO(
    Long questionId,
    Optional<Long> inquiryId,
    Long customerId,
    String answerTitle,
    String answerContents,
    LocalDateTime createdDate

) {
    public static AnswerResponseDTO from(Answer answer) {
        return AnswerResponseDTO.builder()
            .inquiryId(Optional.ofNullable(answer.getInquiry())
                .map(inquiry -> inquiry.getInquiryId()))
            .questionId(answer.getQuestion().getQuestionId())
            .customerId(answer.getCustomer().getCustomerId())
            .answerTitle(answer.getAnswerTitle())
            .answerContents(answer.getAnswerContents())
            .createdDate(answer.getCreatedDate())
            .build();
    }
}
