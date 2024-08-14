package com.pobluesky.backend.domain.inquiry.dto.request;

import com.pobluesky.backend.domain.inquiry.entity.Country;
import com.pobluesky.backend.domain.inquiry.entity.Industry;
import com.pobluesky.backend.domain.inquiry.entity.InquiryType;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.entity.Progress;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.user.entity.Department;


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
    String files,
    String responseDeadline,
    String elapsedDays
) {
}
