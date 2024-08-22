package com.pobluesky.backend.domain.question.dto.request;

import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.domain.question.entity.QuestionStatus;
import com.pobluesky.backend.domain.question.entity.QuestionType;

public record QuestionCreateRequestDTO(
    String title,
    String contents,
    QuestionStatus status,
    QuestionType type
) {

    public Question toQuestionEntity(Inquiry inquiry, Customer customer, String fileName, String filePath) {
        return Question.builder()
            .customer(customer)
            .inquiry(inquiry)
            .title(title)
            .contents(contents)
            .fileName(fileName)
            .filePath(filePath)
            .status(status)
            .type(type)
            .build();
    }
}
