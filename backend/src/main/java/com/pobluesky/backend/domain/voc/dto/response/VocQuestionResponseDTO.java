package com.pobluesky.backend.domain.voc.dto.response;

import com.pobluesky.backend.domain.voc.entity.Question;
import com.pobluesky.backend.domain.voc.entity.QuestionStatus;
import lombok.Builder;

@Builder
public record VocQuestionResponseDTO(
    Long inquiryId,
    Long customerId,
    String title,
    String contents,
    String files,
    QuestionStatus status
) {
    public static VocQuestionResponseDTO from(Question question) {
        return VocQuestionResponseDTO.builder()
            .inquiryId(question.getInquiry().getInquiryId())
            .customerId(question.getInquiry().getCustomer().getCustomerId())
            .title(question.getTitle())
            .contents(question.getContents())
            .files(question.getFiles())
            .status(question.getStatus())
            .build();
    }
}
