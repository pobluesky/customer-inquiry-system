package com.pobluesky.backend.domain.inquiry.dto.response;

import com.pobluesky.backend.domain.inquiry.entity.Country;
import com.pobluesky.backend.domain.inquiry.entity.Industry;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.entity.InquiryType;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.entity.Progress;
import com.pobluesky.backend.domain.user.entity.Department;
import lombok.Builder;

@Builder
public record InquiryResponseDTO(
    Long inquiryNo,
    Country country,
    String corporate,
    String salesPerson,
    Industry industry,
    Progress progress,
    ProductType productType,
    String qualityManager,
    Department department,
    String salesManager,
    String customerRequestDate,
    String responseDeadline,
    String elapsedDays,
    String corporationCode,
    String files,
    InquiryType inquiryType
) {

    public static InquiryResponseDTO from(Inquiry inquiry) {
        return InquiryResponseDTO.builder()
            .inquiryNo(inquiry.getInquiryNo())
            .country(inquiry.getCountry())
            .corporate(inquiry.getCorporate())
            .salesPerson(inquiry.getSalesPerson())
            .industry(inquiry.getIndustry())
            .progress(inquiry.getProgress())
            .productType(inquiry.getProductType())
            .qualityManager(inquiry.getQualityManager())
            .department(inquiry.getDepartment())
            .salesManager(inquiry.getSalesManager())
            .customerRequestDate(inquiry.getCustomerRequestDate())
            .responseDeadline(inquiry.getResponseDeadline())
            .elapsedDays(inquiry.getElapsedDays())
            .corporationCode(inquiry.getCorporationCode())
            .files(inquiry.getFiles())
            .inquiryType(inquiry.getInquiryType())
            .build();
    }
}
