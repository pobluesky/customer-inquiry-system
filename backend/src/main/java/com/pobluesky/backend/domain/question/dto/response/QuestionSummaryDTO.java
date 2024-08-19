package com.pobluesky.backend.domain.question.dto.response;

import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.domain.question.entity.QuestionStatus;

import java.time.LocalDateTime;

import lombok.Builder;

@Builder
public record QuestionSummaryDTO(
    Long questionId,
    String title,
    QuestionStatus status,
    String contents,
    String customerName,
    LocalDateTime questionCreatedAt,
    LocalDateTime answerCreatedAt
) {

    public static QuestionSummaryDTO from(Question question) {
        return QuestionSummaryDTO.builder()
            .questionId(question.getQuestionId())
            .title(question.getTitle())
            .status(question.getStatus())
            .contents(question.getContents())
            .customerName(question.getCustomer().getCustomerName())
            .questionCreatedAt(question.getCreatedDate())
            .answerCreatedAt(question.getAnswer() != null ? question.getAnswer().getCreatedDate() : null)
            .build();
    }
}
