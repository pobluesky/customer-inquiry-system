package com.pobluesky.backend.domain.question.dto.response;

import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.domain.question.entity.QuestionStatus;

import com.pobluesky.backend.domain.question.entity.QuestionType;
import java.time.LocalDateTime;

import lombok.Builder;

@Builder
public record QuestionSummaryResponseDTO(
    Long questionId,
    String title,
    QuestionStatus status,
    QuestionType type,
    String contents,
    String customerName,
    LocalDateTime questionCreatedAt,
    LocalDateTime answerCreatedAt
) {

    public static QuestionSummaryResponseDTO from(Question question) {
        return QuestionSummaryResponseDTO.builder()
            .questionId(question.getQuestionId())
            .title(question.getTitle())
            .status(question.getStatus())
            .type(question.getType())
            .contents(question.getContents())
            .customerName(question.getCustomer().getCustomerName())
            .questionCreatedAt(question.getCreatedDate())
            .answerCreatedAt(question.getAnswer() != null ? question.getAnswer().getCreatedDate() : null)
            .build();
    }
}
