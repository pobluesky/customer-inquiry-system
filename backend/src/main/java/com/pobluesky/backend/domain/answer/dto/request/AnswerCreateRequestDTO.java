package com.pobluesky.backend.domain.answer.dto.request;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.answer.entity.Answer;

public record AnswerCreateRequestDTO(
    String answerTitle,
    String answerContents
) {
    public Answer toAnswerEntity(Long questionId) {
        return Answer.builder()
            .answerTitle(answerTitle)
            .answerContents(answerContents)
            .build();
    }
}
