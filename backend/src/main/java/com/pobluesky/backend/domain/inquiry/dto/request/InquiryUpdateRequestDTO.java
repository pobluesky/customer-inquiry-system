package com.pobluesky.backend.domain.inquiry.dto.request;

import com.pobluesky.backend.domain.inquiry.entity.Country;
import com.pobluesky.backend.domain.inquiry.entity.Industry;
import com.pobluesky.backend.domain.inquiry.entity.InquiryType;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;

import java.util.List;
import java.util.Map;

public record InquiryUpdateRequestDTO(
    Country country,
    String corporate,
    String salesPerson,
    InquiryType inquiryType,
    Industry industry,
    ProductType productType,
    String customerRequestDate,
    String additionalRequests,
    String responseDeadline,
    List<Map<String, Object>> lineItemRequestDTOs
) {
}
