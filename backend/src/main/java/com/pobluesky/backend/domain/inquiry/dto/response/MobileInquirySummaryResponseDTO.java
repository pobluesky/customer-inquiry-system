package com.pobluesky.backend.domain.inquiry.dto.response;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;

import lombok.Builder;

import static com.pobluesky.backend.domain.inquiry.dto.response.MobileInquiryResponseDTO.generateCustomInquiryId;

@Builder
public record MobileInquirySummaryResponseDTO (
    Long inquiryId,

    String customInquiryId,

    String progress,  //진행현황 e.g. 접수 -> 1차검토 -> ..

    String inquiryType, //유형 e.g 품질문의, 공통(견적/품질문의)

    String customerName, //고객사명 e.g. AAT

    String productType
) {
    public static MobileInquirySummaryResponseDTO from(Inquiry inquiry) {

        return MobileInquirySummaryResponseDTO.builder()
                .inquiryId(inquiry.getInquiryId())
                .progress(inquiry.getProgress().getKoreanName())
                .inquiryType(inquiry.getInquiryType().getKoreanName())
                .customerName(inquiry.getCustomer().getCustomerName())
                .productType(inquiry.getProductType().toString())
                .customInquiryId(generateCustomInquiryId(inquiry.getCreatedDate(), inquiry.getInquiryId()))
                .build();
    }

    public static MobileInquirySummaryResponseDTO toMobileResponseDTO(InquirySummaryResponseDTO inquirySummary) {

        return MobileInquirySummaryResponseDTO.builder()
                .inquiryId(inquirySummary.inquiryId())
                .progress(inquirySummary.progress().getKoreanName())
                .inquiryType(inquirySummary.inquiryType().getKoreanName())
                .customerName(inquirySummary.customerName())
                .productType(inquirySummary.productType().toString())
                .customInquiryId(generateCustomInquiryId(inquirySummary.createdDate(), inquirySummary.inquiryId()))
                .build();
    }
}
