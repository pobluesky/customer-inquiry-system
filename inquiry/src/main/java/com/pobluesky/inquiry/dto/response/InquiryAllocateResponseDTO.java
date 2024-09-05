package com.pobluesky.inquiry.dto.response;

import com.pobluesky.feign.Manager;
import com.pobluesky.feign.UserClient;
import com.pobluesky.inquiry.entity.Inquiry;
import jakarta.jws.soap.SOAPBinding.Use;
import lombok.Builder;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Builder
public record InquiryAllocateResponseDTO (
    Long inquiryId,
    ManagerSummaryResponseDTO salesManagerSummaryDto,
    ManagerSummaryResponseDTO qualityManagerSummaryDto
) {
    public static InquiryAllocateResponseDTO from(Inquiry inquiry, UserClient userClient) {

        ManagerSummaryResponseDTO salesManager = null;
        ManagerSummaryResponseDTO qualityManager = null;

        try {
            // Feign을 통해 매니저 정보를 가져옴
            salesManager = userClient.getManagerSummaryById(inquiry.getSalesManagerId()).getData();
        } catch (Exception e) {
            // 예외 발생 시 로그 남기기
            log.error("Failed to fetch sales manager summary for userId: {}", inquiry.getSalesManagerId(), e);
        }

        try {
            qualityManager = userClient.getManagerSummaryById(inquiry.getQualityManagerId()).getData();
        } catch (Exception e) {
            log.error("Failed to fetch quality manager summary for userId: {}", inquiry.getQualityManagerId(), e);
        }

        return InquiryAllocateResponseDTO.builder()
            .inquiryId(inquiry.getInquiryId())
            .salesManagerSummaryDto(salesManager)
            .qualityManagerSummaryDto(qualityManager)
            .build();
    }
}
