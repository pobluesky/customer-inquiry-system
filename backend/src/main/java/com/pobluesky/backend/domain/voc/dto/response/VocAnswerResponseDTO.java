package com.pobluesky.backend.domain.voc.dto.response;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.voc.entity.Answer;
import com.pobluesky.backend.domain.voc.entity.Question;
import lombok.Builder;

@Builder
public record VocAnswerResponseDTO(
    Question question,
    Inquiry inquiry,
    Customer customer,
    String answerContents
) {
    public static VocAnswerResponseDTO from(Answer answer) {
        return VocAnswerResponseDTO.builder()
            .question(answer.getQuestion())
            .inquiry(answer.getInquiry())
            .customer(answer.getCustomer())
            .answerContents(answer.getAnswerContents())
            .build();
    }
}
