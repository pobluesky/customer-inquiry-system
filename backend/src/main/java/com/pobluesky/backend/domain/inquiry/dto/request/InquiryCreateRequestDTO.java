package com.pobluesky.backend.domain.inquiry.dto.request;


import com.pobluesky.backend.domain.inquiry.entity.Country;
import com.pobluesky.backend.domain.inquiry.entity.Industry;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.entity.InquiryType;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.entity.Progress;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.user.entity.Department;


public record InquiryCreateRequestDTO(
    Customer customer,
    Country country,
    String corporate,
    String corporateCode,
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
    InquiryType inquiryType,
    Boolean isActivated,
    String additionalRequests
) {

    public Inquiry toInquiryEntity() {
        return Inquiry.builder()
            .country(country)
            .corporate(corporate)
            .salesPerson(salesPerson)
            .industry(industry)
            .progress(progress)
            .productType(productType)
            .qualityManager(qualityManager)
            .department(department)
            .salesManager(salesManager)
            .customerRequestDate(customerRequestDate)
            .responseDeadline(responseDeadline)
            .elapsedDays(elapsedDays)
            .corporationCode("(주) 포스코")
            .files(files)
            .inquiryType(inquiryType)
            .isActivated(true)
            .additionalRequests(additionalRequests)
            .build();
    }
}
