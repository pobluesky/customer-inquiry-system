package com.pobluesky.backend.domain.answer.dto.response;

import com.pobluesky.backend.domain.answer.entity.Answer;

import lombok.Builder;

@Builder
public record AnswerResponseDTO(
    Long questionId,
    Long inquiryId,
    Long customerId,
    String answerTitle,
    String answerContents

) {
    public static AnswerResponseDTO from(Answer answer) {
        return AnswerResponseDTO.builder()
            .questionId(answer.getQuestion().getQuestionId())
            .inquiryId(answer.getInquiry().getInquiryId())
            .customerId(answer.getCustomer().getCustomerId())
            .answerTitle(answer.getAnswerTitle())
            .answerContents(answer.getAnswerContents())
            .build();
    }
}
