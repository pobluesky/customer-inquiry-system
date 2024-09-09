package com.pobluesky.voc.question.dto.response;

import com.pobluesky.voc.feign.UserClient;
import com.pobluesky.voc.question.entity.Question;
import com.pobluesky.voc.question.entity.QuestionStatus;
import com.pobluesky.voc.question.entity.QuestionType;
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
    LocalDateTime createdDate
) {

    public static QuestionResponseDTO from(Question question, UserClient userClient) {
        String customerName = userClient.getCustomerByIdWithoutToken(question.getCustomerId()).getData().getName();

        return QuestionResponseDTO.builder()
            .inquiryId(Optional.ofNullable(question.getInquiryId()))
            .userId(question.getCustomerId())
            .questionId(question.getQuestionId())
            .customerName(customerName)
            .title(question.getTitle())
            .contents(question.getContents())
            .fileName(question.getFileName())
            .filePath(question.getFilePath())
            .status(question.getStatus())
            .type(question.getType())
            .createdDate(question.getCreatedDate())
            .build();
    }
}
