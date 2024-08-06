package com.pobluesky.backend.domain.voc.dto.request;

import com.pobluesky.backend.domain.voc.entity.Answer;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;

public record VocAnswerCreateRequestDTO(
    String answerContents
) {
    public Answer toAnswerEntity(Inquiry inquiry) {
        return Answer.builder()
            .inquiry(inquiry)
            .answerContents(answerContents)
            .build();
    }
}
