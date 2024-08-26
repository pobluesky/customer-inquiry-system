package com.pobluesky.backend.domain.inquiry.dto.response;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.user.dto.response.ManagerSummaryResponseDTO;

import lombok.Builder;

@Builder
public record InquiryAllocateResponseDTO (
    Long inquiryId,
    ManagerSummaryResponseDTO salesManagerSummaryDto,
    ManagerSummaryResponseDTO qualityManagerSummaryDto
) {
        public static InquiryAllocateResponseDTO from(Inquiry inquiry) {

            return InquiryAllocateResponseDTO.builder()
                .inquiryId(inquiry.getInquiryId())
                .salesManagerSummaryDto(ManagerSummaryResponseDTO.from(inquiry.getSalesManager()))
                .qualityManagerSummaryDto(ManagerSummaryResponseDTO.from(inquiry.getQualityManager()))
                .build();
        }
}
