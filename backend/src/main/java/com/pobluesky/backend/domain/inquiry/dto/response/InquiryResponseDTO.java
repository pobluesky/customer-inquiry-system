package com.pobluesky.backend.domain.inquiry.dto.response;

import com.pobluesky.backend.domain.inquiry.entity.Country;
import com.pobluesky.backend.domain.inquiry.entity.Industry;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.entity.InquiryType;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.entity.Progress;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.user.entity.Department;
import lombok.Builder;

@Builder
public record InquiryResponseDTO(
    Long inquiryId,
    Long customerId,
    String name,
    String customerName,
    Country country,
    String corporate,
    String  salesPerson,
    InquiryType inquiryType,
    Industry industry,
    String corporationCode,
    ProductType productType,
    Progress progress,
    String customerRequestDate,
    String additionalRequests,
    String files,
    String responseDeadline,
    String elapsedDays,
    Boolean isActivated
) {

    public static InquiryResponseDTO from(Inquiry inquiry) {
        return InquiryResponseDTO.builder()
            .inquiryId(inquiry.getInquiryId())
            .customerId(inquiry.getCustomer().getUserId())
            .name(inquiry.getCustomer().getName())
            .customerName(inquiry.getCustomer().getCustomerName())
            .country(inquiry.getCountry())
            .corporate(inquiry.getCorporate())
            .salesPerson(inquiry.getSalesPerson())
            .inquiryType(inquiry.getInquiryType())
            .industry(inquiry.getIndustry())
            .corporationCode(inquiry.getCorporationCode())
            .productType(inquiry.getProductType())
            .progress(inquiry.getProgress())
            .customerRequestDate(inquiry.getCustomerRequestDate())
            .additionalRequests(inquiry.getAdditionalRequests())
            .files(inquiry.getFiles())
            .responseDeadline(inquiry.getResponseDeadline())
            .elapsedDays(inquiry.getElapsedDays())
            .isActivated(inquiry.getIsActivated())
            .build();
    }
}
