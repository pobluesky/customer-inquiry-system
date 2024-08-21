package com.pobluesky.backend.domain.inquiry.dto.request;

import com.pobluesky.backend.domain.inquiry.entity.Country;
import com.pobluesky.backend.domain.inquiry.entity.Industry;
import com.pobluesky.backend.domain.inquiry.entity.InquiryType;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.entity.Progress;

import io.swagger.v3.oas.annotations.media.Schema;

import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.user.entity.Department;

import java.util.List;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

public record InquiryUpdateRequestDTO(
    Country country,
    String corporate,
    String  salesPerson,
    InquiryType inquiryType,
    Industry industry,
    ProductType productType,
    Progress progress,
    String customerRequestDate,
    String additionalRequests,
    @Schema(hidden = true) MultipartFile files,
    String responseDeadline,
    List<Map<String, Object>> lineItemRequestDTOs
) {
}
