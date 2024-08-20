package com.pobluesky.backend.domain.inquiry.dto.request;

import com.pobluesky.backend.domain.inquiry.entity.Country;
import com.pobluesky.backend.domain.inquiry.entity.Industry;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.entity.InquiryType;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.entity.Progress;

import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

public record InquiryCreateRequestDTO(
    Country country,
    String corporate,
    String salesPerson,
    InquiryType inquiryType,
    Industry industry,
    String corporationCode,
    ProductType productType,
    Progress progress,
    String customerRequestDate,
    String additionalRequests,
    @Schema(hidden = true) MultipartFile files,
    String responseDeadline,
    List<Map<String, Object>> lineItemRequestDTOs
) {
    public Inquiry toInquiryEntity(String filePath) {

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
            .responseDeadline(responseDeadline)
            .build();
    }
}
