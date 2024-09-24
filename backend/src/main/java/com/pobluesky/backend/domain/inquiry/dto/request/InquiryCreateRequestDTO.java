package com.pobluesky.backend.domain.inquiry.dto.request;

import com.pobluesky.backend.domain.inquiry.entity.Country;
import com.pobluesky.backend.domain.inquiry.entity.Industry;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.entity.InquiryType;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.entity.Progress;

import com.pobluesky.backend.domain.user.entity.Manager;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public record InquiryCreateRequestDTO(
    Country country,
    String corporate,
    String salesPerson,
    InquiryType inquiryType,
    Industry industry,
    ProductType productType,
    String customerRequestDate,
    String additionalRequests,
    String responseDeadline,
    Optional<Long> salesManagerId,
    List<Map<String, Object>> lineItemRequestDTOs
) {
    public Inquiry toInquiryEntity(String fileName, String filePath, Optional<Manager> salesManager) {

        return Inquiry.builder()
            .country(country)
            .corporate(corporate)
            .salesPerson(salesPerson)
            .inquiryType(inquiryType)
            .industry(industry)
            .corporationCode("(주) 포스코")
            .productType(productType)
            .customerRequestDate(customerRequestDate)
            .additionalRequests(additionalRequests)
            .fileName(fileName)
            .filePath(filePath)
            .responseDeadline(responseDeadline)
            .salesManager(salesManager.orElse(null))
            .build();
    }
}
