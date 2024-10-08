package com.pobluesky.backend.domain.inquiry.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.pobluesky.backend.domain.inquiry.entity.Country;
import com.pobluesky.backend.domain.inquiry.entity.Industry;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.entity.InquiryType;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.entity.Progress;

import com.pobluesky.backend.domain.user.entity.Department;
import com.pobluesky.backend.domain.user.entity.Manager;
import java.time.LocalDateTime;

import lombok.Builder;

@Builder
public record InquirySummaryResponseDTO(
    Long inquiryId,
    String salesPerson,
    Progress progress,
    ProductType productType,
    InquiryType inquiryType,
    String customerName,
    Country country,
    String corporate,
    String corporationCode,
    Industry industry,
    String salesManagerName,
    String qualityManagerName,
    Department salesManagerDepartment,
    Department qualityManagerDepartment,

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyyMMdd")
    LocalDateTime createdDate
) {

    public static InquirySummaryResponseDTO from(Inquiry inquiry) {

        return InquirySummaryResponseDTO.builder()
            .inquiryId(inquiry.getInquiryId())
            .salesPerson(inquiry.getSalesPerson())
            .progress(inquiry.getProgress())
            .productType(inquiry.getProductType())
            .inquiryType(inquiry.getInquiryType())
            .customerName(inquiry.getCustomer().getCustomerName())
            .country(inquiry.getCountry())
            .corporate(inquiry.getCorporate())
            .corporationCode(inquiry.getCorporationCode())
            .industry(inquiry.getIndustry())
            .salesManagerName(getManagerName(inquiry.getSalesManager()))
            .qualityManagerName(getManagerName(inquiry.getQualityManager()))
            .salesManagerDepartment(getManagerDepartment(inquiry.getSalesManager()))
            .qualityManagerDepartment(getManagerDepartment(inquiry.getQualityManager()))
            .createdDate(inquiry.getCreatedDate())
            .build();
    }

    private static String getManagerName(Manager manager) {
        return manager != null ? manager.getName() : null;
    }

    private static Department getManagerDepartment(Manager manager) {
        return manager != null ? manager.getDepartment() : null;
    }
}
