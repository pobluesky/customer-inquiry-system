package com.pobluesky.inquiry.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.pobluesky.feign.Customer;
import com.pobluesky.feign.Manager;
import com.pobluesky.feign.UserClient;
import com.pobluesky.inquiry.entity.Country;
import com.pobluesky.inquiry.entity.Industry;
import com.pobluesky.inquiry.entity.Inquiry;
import com.pobluesky.inquiry.entity.InquiryType;
import com.pobluesky.inquiry.entity.ProductType;
import com.pobluesky.inquiry.entity.Progress;

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
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyyMMdd")
    LocalDateTime createdDate
) {

    public static InquirySummaryResponseDTO from(Inquiry inquiry, UserClient userClient) {
        Customer customer = userClient.getCustomerByIdWithoutToken(inquiry.getInquiryId()).getData();
        Manager salesManager = null;
        Manager qualityManager = null;
        String salesManagerName = null;
        String qualityManagerName = null;

        if(inquiry.getSalesManagerId()!=null){
            salesManager = userClient.getManagerByIdWithoutToken(inquiry.getSalesManagerId()).getData();
            salesManagerName=salesManager.getName();
        }
        if(inquiry.getQualityManagerId()!=null){
            qualityManager = userClient.getManagerByIdWithoutToken(inquiry.getQualityManagerId()).getData();
            qualityManagerName=qualityManager.getName();
        }

        return InquirySummaryResponseDTO.builder()
            .inquiryId(inquiry.getInquiryId())
            .salesPerson(inquiry.getSalesPerson())
            .progress(inquiry.getProgress())
            .productType(inquiry.getProductType())
            .inquiryType(inquiry.getInquiryType())
            .customerName(customer.getCustomerName())
            .country(inquiry.getCountry())
            .corporate(inquiry.getCorporate())
            .corporationCode(inquiry.getCorporationCode())
            .industry(inquiry.getIndustry())
            .salesManagerName(salesManagerName)
            .qualityManagerName(qualityManagerName)
            .createdDate(inquiry.getCreatedDate())
            .build();
    }
}
