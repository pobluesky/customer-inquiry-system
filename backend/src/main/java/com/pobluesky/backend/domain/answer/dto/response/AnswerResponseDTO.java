package com.pobluesky.backend.domain.answer.dto.response;

import com.pobluesky.backend.domain.answer.entity.Answer;

import java.time.LocalDateTime;
import java.util.Optional;

import lombok.Builder;
import org.apache.arrow.flatbuf.Bool;

@Builder
public record AnswerResponseDTO(

    Long questionId,

    Optional<Long> inquiryId,

    Long customerId,

    Long managerId,

    String title,

    String contents,

    String fileName,

    String filePath,

    LocalDateTime createdDate,

    Boolean isActivated
) {
    public static AnswerResponseDTO from(Answer answer) {

        return AnswerResponseDTO.builder()
            .inquiryId(Optional.ofNullable(answer.getInquiry())
                .map(inquiry -> inquiry.getInquiryId()))
            .questionId(answer.getQuestion().getQuestionId())
            .customerId(answer.getCustomer().getUserId())
            .managerId(answer.getManager().getUserId())
            .title(answer.getTitle())
            .contents(answer.getContents())
            .createdDate(answer.getCreatedDate())
            .fileName(answer.getFileName())
            .filePath(answer.getFilePath())
            .isActivated(answer.getIsActivated())
            .build();
    }
}
