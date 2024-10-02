package com.pobluesky.backend.domain.question.dto.response;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.question.entity.Question;

import lombok.Builder;

import java.util.Optional;

@Builder
public record MobileQuestionSummaryResponseDTO (

        Optional<Long> inquiryId,

        Long questionId,

        String customer,

        String title,

        String status,

        String type,

        String contents
) {
    public static MobileQuestionSummaryResponseDTO from(Question question) {

        return MobileQuestionSummaryResponseDTO.builder()
                .inquiryId(Optional.ofNullable(question.getInquiry())
                        .map(Inquiry::getInquiryId))
                .questionId(question.getQuestionId())
                .customer(question.getCustomer().getCustomerName())
                .title(question.getTitle())
                .status(question.getStatus().getStatus())
                .type(question.getType().getType())
                .contents(question.getContents())
                .build();
    }

    public static MobileQuestionSummaryResponseDTO toMobileResponseDTO(QuestionSummaryResponseDTO questionSummary) {

        return MobileQuestionSummaryResponseDTO.builder()
                .inquiryId(Optional.ofNullable(questionSummary.managerId()))
                .questionId(questionSummary.questionId())
                .customer(questionSummary.customerName())
                .title(questionSummary.title())
                .status(questionSummary.status().getStatus())
                .type(questionSummary.type().getType())
                .contents(questionSummary.contents())
                .build();
    }
}
