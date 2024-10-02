package com.pobluesky.backend.domain.question.dto.response;

import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.domain.question.entity.QuestionStatus;
import com.pobluesky.backend.domain.question.entity.QuestionType;

import java.time.LocalDateTime;

import java.io.Serializable;

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

    LocalDateTime answerCreatedAt,

    Long managerId,

    Boolean isActivated

) implements Serializable {
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
            .managerId(question.getAnswer() != null ? question.getAnswer().getManager().getUserId() : null)
            .isActivated(question.getIsActivated())
            .build();
    }
}
