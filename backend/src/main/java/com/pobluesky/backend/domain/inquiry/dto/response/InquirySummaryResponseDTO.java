package com.pobluesky.backend.domain.inquiry.dto.response;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.entity.InquiryType;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.entity.Progress;

import com.pobluesky.backend.domain.lineitem.entity.CarLineItem;
import com.pobluesky.backend.domain.lineitem.entity.type.StandardOrg;
import lombok.Builder;

@Builder
public record InquirySummaryResponseDTO(
    Long inquiryId,
    String salesPerson,
    Progress progress,
    ProductType productType,
    InquiryType inquiryType,
    String pjtName,
    StandardOrg standardOrg,
    String thickness,
    String width,
    String customerName
) {

    public static InquirySummaryResponseDTO from(Inquiry inquiry, CarLineItem carLineItem) {
        return InquirySummaryResponseDTO.builder()
            .inquiryId(inquiry.getInquiryId())
            .salesPerson(inquiry.getSalesPerson())
            .progress(inquiry.getProgress())
            .productType(inquiry.getProductType())
            .inquiryType(inquiry.getInquiryType())
            .customerName(inquiry.getCustomer().getCustomerName())
            .pjtName(carLineItem.getPjtName())
            .standardOrg(carLineItem.getStandardOrg())
            .thickness(carLineItem.getThickness())
            .width(carLineItem.getWidth())
            .build();
    }
}
