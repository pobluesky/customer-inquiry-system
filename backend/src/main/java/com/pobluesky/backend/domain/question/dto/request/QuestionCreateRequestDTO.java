package com.pobluesky.backend.domain.question.dto.request;

import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.domain.question.entity.QuestionStatus;
import com.pobluesky.backend.domain.question.entity.QuestionType;

import io.swagger.v3.oas.annotations.media.Schema;

import org.springframework.web.multipart.MultipartFile;

public record QuestionCreateRequestDTO(
    String title,
    String contents,
    @Schema(hidden = true) MultipartFile files,
    QuestionStatus status,
    QuestionType type
) {

    public Question toQuestionEntity(Inquiry inquiry, Customer customer, String filePath) {
        return Question.builder()
            .customer(customer)
            .inquiry(inquiry)
            .title(title)
            .contents(contents)
            .files(filePath)
            .status(status)
            .type(type)
            .build();
    }
}
