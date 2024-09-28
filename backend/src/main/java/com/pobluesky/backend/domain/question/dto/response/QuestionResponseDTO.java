package com.pobluesky.backend.domain.question.dto.response;

import com.pobluesky.backend.domain.collaboration.entity.ColStatus;
import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.domain.question.entity.QuestionStatus;
import com.pobluesky.backend.domain.question.entity.QuestionType;

import java.time.LocalDateTime;
import java.util.Optional;

import lombok.Builder;

@Builder
public record QuestionResponseDTO(

    Optional<Long> inquiryId,

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

    Optional<ColStatus> colStatus,

    Boolean isActivated
) {
    public static QuestionResponseDTO from(Question question) {

        return QuestionResponseDTO.builder()
            .inquiryId(Optional.ofNullable(question.getInquiry())
                .map(inquiry -> inquiry.getInquiryId()))
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
            .colStatus(Optional.ofNullable(question.getCollaboration())
                .map(collaboration -> collaboration.getColStatus()))
            .isActivated(question.getIsActivated())
            .build();
    }
}
