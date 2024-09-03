package com.pobluesky.voc.question.dto.response;


import com.pobluesky.voc.feign.UserClient;
import com.pobluesky.voc.question.entity.Question;
import com.pobluesky.voc.question.entity.QuestionStatus;
import com.pobluesky.voc.question.entity.QuestionType;
import java.time.LocalDateTime;
import lombok.Builder;

@Builder
public record QuestionSummaryResponseDTO(
    Long questionId,
    String title,
    Long customerId,
    QuestionStatus status,
    QuestionType type,
    String contents,
    String customerName,
    LocalDateTime questionCreatedAt,
    LocalDateTime answerCreatedAt
) {

    public static QuestionSummaryResponseDTO from(Question question, UserClient userClient) {
        String customerName = userClient.getCustomerById(question.getCustomerId()).getName();

        return QuestionSummaryResponseDTO.builder()
            .questionId(question.getQuestionId())
            .title(question.getTitle())
            .status(question.getStatus())
            .type(question.getType())
            .contents(question.getContents())
            .customerName(customerName)
            .questionCreatedAt(question.getCreatedDate())
            .answerCreatedAt(question.getAnswer() != null ? question.getAnswer().getCreatedDate() : null)
            .build();
    }


}
