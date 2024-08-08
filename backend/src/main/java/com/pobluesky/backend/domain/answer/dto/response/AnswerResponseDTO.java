package com.pobluesky.backend.domain.answer.dto.response;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.domain.answer.entity.Answer;

import lombok.Builder;

@Builder
public record AnswerResponseDTO(
    Question question,
    Inquiry inquiry,
    Customer customer,
    String answerTitle,
    String answerContents
) {
    public static AnswerResponseDTO from(Answer answer) {
        return AnswerResponseDTO.builder()
            .question(answer.getQuestion())
            .inquiry(answer.getInquiry())
            .customer(answer.getCustomer())
            .answerTitle(answer.getAnswerTitle())
            .answerContents(answer.getAnswerContents())
            .build();
    }
}
