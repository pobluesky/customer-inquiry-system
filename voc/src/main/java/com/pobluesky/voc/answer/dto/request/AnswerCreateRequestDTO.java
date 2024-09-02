package com.pobluesky.voc.answer.dto.request;

import com.pobluesky.voc.answer.entity.Answer;
import com.pobluesky.voc.question.entity.Question;

public record AnswerCreateRequestDTO(
    String title,
    String contents
) {
    public Answer toAnswerEntity(Question question, Long inquiryId, Long customerId, String fileName, String filePath) {
        return Answer.builder()
            .question(question)
            .inquiryId(inquiryId)
            .customerId(customerId)
            .title(title)
            .contents(contents)
            .fileName(fileName)
            .filePath(filePath)
            .build();
    }
}
