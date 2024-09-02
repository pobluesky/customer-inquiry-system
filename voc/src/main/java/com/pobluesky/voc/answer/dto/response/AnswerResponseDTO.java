package com.pobluesky.voc.answer.dto.response;


import com.pobluesky.voc.answer.entity.Answer;
import java.time.LocalDateTime;
import java.util.Optional;
import lombok.Builder;

@Builder
public record AnswerResponseDTO(
    Long questionId,
    Optional<Long> inquiryId,
    Long userId,
    String title,
    String contents,
    String fileName,
    String filePath,
    LocalDateTime createdDate

) {
    public static AnswerResponseDTO from(Answer answer) {
        return AnswerResponseDTO.builder()
            .inquiryId(Optional.ofNullable(answer.getInquiryId()))
            .questionId(answer.getQuestion().getQuestionId())
            .userId(answer.getCustomerId())
            .title(answer.getTitle())
            .contents(answer.getContents())
            .createdDate(answer.getCreatedDate())
            .fileName(answer.getFileName())
            .filePath(answer.getFilePath())
            .build();
    }
}
