package com.pobluesky.backend.domain.question.dto.response;

import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.domain.question.entity.QuestionStatus;
import lombok.Builder;

@Builder
public record QuestionResponseDTO(
    Long inquiryId,
    Long customerId,
    String title,
    String contents,
    String files,
    QuestionStatus status
) {
    public static QuestionResponseDTO from(Question question) {
        return QuestionResponseDTO.builder()
            .inquiryId(question.getInquiry().getInquiryId())
            .customerId(question.getInquiry().getCustomer().getCustomerId())
            .title(question.getTitle())
            .contents(question.getContents())
            .files(question.getFiles())
            .status(question.getStatus())
            .build();
    }
}
