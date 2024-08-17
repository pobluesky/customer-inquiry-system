package com.pobluesky.backend.domain.question.dto.response;

import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.domain.question.entity.QuestionStatus;
import com.pobluesky.backend.domain.question.entity.QuestionType;
import lombok.Builder;

import java.time.LocalDateTime;
import java.util.Optional;

@Builder
public record QuestionResponseDTO(
    Optional<Long> inquiryId,
    Long userId,
    Long questionId,
    String customerName,
    String title,
    String contents,
    String files,
    QuestionStatus status,
    QuestionType type,
    LocalDateTime createdDate
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
            .files(question.getFiles())
            .status(question.getStatus())
            .type(question.getType())
            .createdDate(question.getCreatedDate())
            .build();
    }
}
