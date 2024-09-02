package com.pobluesky.inquiry.dto.response;

import com.pobluesky.feign.UserClient;
import com.pobluesky.inquiry.entity.Inquiry;
import lombok.Builder;

@Builder
public record InquiryAllocateResponseDTO (
    Long inquiryId,
    ManagerSummaryResponseDTO salesManagerSummaryDto,
    ManagerSummaryResponseDTO qualityManagerSummaryDto
) {
        public static InquiryAllocateResponseDTO from(Inquiry inquiry,UserClient userClient) {
            ManagerSummaryResponseDTO salesManagerSummaryDto = userClient.getManagerSummaryById(inquiry.getSalesManagerId());
            ManagerSummaryResponseDTO qualityManagerSummaryDto = userClient.getManagerSummaryById(inquiry.getQualityManagerId());


            return InquiryAllocateResponseDTO.builder()
                .inquiryId(inquiry.getInquiryId())
                .salesManagerSummaryDto(salesManagerSummaryDto)
                .qualityManagerSummaryDto(qualityManagerSummaryDto)
                .build();
        }
}
