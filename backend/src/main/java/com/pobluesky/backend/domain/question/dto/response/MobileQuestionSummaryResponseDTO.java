package com.pobluesky.backend.domain.question.dto.response;

import com.pobluesky.backend.domain.question.entity.Question;
import lombok.Builder;

@Builder
public record MobileQuestionSummaryResponseDTO (

        Long questionId,

        String customer,

        String title,

        String status,

        String type,

        String contents
) {
    public static MobileQuestionSummaryResponseDTO from(Question question) {

        return MobileQuestionSummaryResponseDTO.builder()
                .questionId(question.getQuestionId())
                .customer(question.getCustomer().getCustomerName())
                .title(question.getTitle())
                .status(question.getStatus().getStatus())
                .type(question.getType().getType())
                .contents(question.getContents())
                .build();
    }
}
