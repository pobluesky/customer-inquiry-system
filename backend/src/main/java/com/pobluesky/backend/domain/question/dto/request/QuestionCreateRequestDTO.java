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
//<<<<<<< HEAD
//    String files,
//    String fileName,
//    String filePath,
//=======
    @Schema(hidden = true) MultipartFile files,
//>>>>>>> 4e02df8618f2ca6e26a90322ffab9a6acd4df308
    QuestionStatus status,
    QuestionType type
) {

    public Question toQuestionEntity(Inquiry inquiry, Customer customer, String filePath) {
        return Question.builder()
            .customer(customer)
            .inquiry(inquiry)
            .title(title)
            .contents(contents)
//<<<<<<< HEAD
//            .files(files)
//            .fileName(fileName)
//            .filePath(filePath)
//=======
            .files(filePath)
//>>>>>>> 4e02df8618f2ca6e26a90322ffab9a6acd4df308
            .status(status)
            .type(type)
            .build();
    }
}
