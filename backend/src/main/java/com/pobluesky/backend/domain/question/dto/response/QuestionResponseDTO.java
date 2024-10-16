package com.pobluesky.backend.domain.question.dto.response;

import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.domain.question.entity.QuestionStatus;
import com.pobluesky.backend.domain.question.entity.QuestionType;

import java.time.LocalDateTime;

import lombok.Builder;

@Builder
public record QuestionResponseDTO(

    Long inquiryId,

    Long userId,

    Long questionId,

    String customerName,

    String title,

    String contents,

    String fileName,

    String filePath,

    QuestionStatus status,

    QuestionType type,

    LocalDateTime createdDate,

    Boolean isActivated
) {
    public static QuestionResponseDTO from(Question question) {

        return QuestionResponseDTO.builder()
            .inquiryId(question.getInquiry() != null ? question.getInquiry().getInquiryId() : null)
            .userId(question.getCustomer().getUserId())
            .questionId(question.getQuestionId())
            .customerName(question.getCustomer().getCustomerName())
            .title(question.getTitle())
            .contents(question.getContents())
            .fileName(question.getFileName())
            .filePath(question.getFilePath())
            .status(question.getStatus())
            .type(question.getType())
            .createdDate(question.getCreatedDate())
            .isActivated(question.getIsActivated())
            .build();
    }
}
