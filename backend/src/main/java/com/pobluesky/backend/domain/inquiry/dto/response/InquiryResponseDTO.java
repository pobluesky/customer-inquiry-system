package com.pobluesky.backend.domain.inquiry.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.pobluesky.backend.domain.inquiry.entity.Country;
import com.pobluesky.backend.domain.inquiry.entity.Industry;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.entity.InquiryType;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.entity.Progress;
import com.pobluesky.backend.domain.lineitem.dto.response.LineItemResponseDTO;

import com.pobluesky.backend.domain.user.dto.response.ManagerSummaryResponseDTO;
import com.pobluesky.backend.domain.user.entity.Manager;
import java.time.LocalDateTime;
import java.util.List;

import lombok.Builder;

@Builder
public record InquiryResponseDTO(
    Long inquiryId,
    Long customerId,
    String name,
    String customerName,
    String customerCode,
    String email,
    String phone,
    Country country,
    String corporate,
    String  salesPerson,
    ManagerSummaryResponseDTO salesManagerSummaryDto,
    ManagerSummaryResponseDTO qualityManagerSummaryDto,
    InquiryType inquiryType,
    Industry industry,
    String corporationCode,
    ProductType productType,
    Progress progress,
    String customerRequestDate,
    String additionalRequests,
    String fileName,
    String filePath,
    String responseDeadline,
    List<LineItemResponseDTO> lineItemResponseDTOs,
    Boolean isActivated,
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyyMMdd")
    LocalDateTime createdDate
) {

    public static InquiryResponseDTO of(
        Inquiry inquiry,
        List<LineItemResponseDTO> lineItemResponseDTOs
    ) {

        return InquiryResponseDTO.builder()
            .inquiryId(inquiry.getInquiryId())
            .customerId(inquiry.getCustomer().getUserId())
            .name(inquiry.getCustomer().getName())
            .customerName(inquiry.getCustomer().getCustomerName())
            .customerCode(inquiry.getCustomer().getCustomerCode())
            .corporationCode(inquiry.getCustomer().getCustomerCode())
            .email(inquiry.getCustomer().getEmail())
            .phone(inquiry.getCustomer().getPhone())
            .country(inquiry.getCountry())
            .corporate(inquiry.getCorporate())
            .salesPerson(inquiry.getSalesPerson())
            .salesManagerSummaryDto(
                ManagerSummaryResponseDTO.from(
                    inquiry.getSalesManager() != null ? inquiry.getSalesManager() : null
                )
            )
            .qualityManagerSummaryDto(
                ManagerSummaryResponseDTO.from(
                    inquiry.getQualityManager() != null ? inquiry.getQualityManager() : null
                )
            )
            .inquiryType(inquiry.getInquiryType())
            .industry(inquiry.getIndustry())
            .corporationCode(inquiry.getCorporationCode())
            .productType(inquiry.getProductType())
            .progress(inquiry.getProgress())
            .customerRequestDate(inquiry.getCustomerRequestDate())
            .additionalRequests(inquiry.getAdditionalRequests())
            .fileName(inquiry.getFileName())
            .filePath(inquiry.getFilePath())
            .responseDeadline(inquiry.getResponseDeadline())
            .lineItemResponseDTOs(lineItemResponseDTOs)
            .isActivated(inquiry.getIsActivated())
            .createdDate(inquiry.getCreatedDate())
            .build();
    }
}
