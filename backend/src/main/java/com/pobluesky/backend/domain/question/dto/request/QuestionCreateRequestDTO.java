package com.pobluesky.backend.domain.question.dto.request;

import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.domain.question.entity.QuestionStatus;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.user.entity.Customer;

public record QuestionCreateRequestDTO(
    String title,
    String contents,
    String files,
    QuestionStatus status
) {
    public Question toQuestionEntity(Inquiry inquiry, Customer customer) {
        return Question.builder()
            .customer(customer)
            .inquiry(inquiry)
            .title(title)
            .contents(contents)
            .files(files)
            .status(status)
            .build();
    }
}
