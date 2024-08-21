package com.pobluesky.backend.domain.answer.dto.request;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.domain.answer.entity.Answer;
import com.pobluesky.backend.domain.user.entity.Customer;

public record AnswerCreateRequestDTO(
    String title,
    String contents
) {
    public Answer toAnswerEntity(Question question, Inquiry inquiry, Customer customer, String fileName, String filePath) {
        return Answer.builder()
            .question(question)
            .inquiry(inquiry)
            .customer(customer)
            .title(title)
            .contents(contents)
            .fileName(fileName)
            .filePath(filePath)
            .build();
    }
}
