package com.pobluesky.backend.domain.inquiry.dto.request;

import com.pobluesky.backend.domain.inquiry.entity.Country;
import com.pobluesky.backend.domain.inquiry.entity.Industry;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.entity.InquiryType;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.entity.Progress;

import java.util.List;
import java.util.Map;

public record InquiryCreateRequestDTO(
    Country country,
    String corporate,
    String salesPerson,
    InquiryType inquiryType,
    Industry industry,
    ProductType productType,
    Progress progress,
    String customerRequestDate,
    String additionalRequests,
    String responseDeadline,
    List<Map<String, Object>> lineItemRequestDTOs
) {
    public Inquiry toInquiryEntity(String filePath,String fileName) {

        return Inquiry.builder()
            .country(country)
            .corporate(corporate)
            .salesPerson(salesPerson)
            .inquiryType(inquiryType)
            .industry(industry)
            .corporationCode("(주) 포스코")
            .productType(productType)
            .progress(progress)
            .customerRequestDate(customerRequestDate)
            .additionalRequests(additionalRequests)
            .files(filePath)
            .fileName(fileName)
            .responseDeadline(responseDeadline)
            .build();
    }
}
