package com.pobluesky.inquiry.dto.response;

import com.pobluesky.feign.Customer;
import com.pobluesky.feign.UserClient;
import com.pobluesky.inquiry.entity.Country;
import com.pobluesky.inquiry.entity.Industry;
import com.pobluesky.inquiry.entity.Inquiry;
import com.pobluesky.inquiry.entity.InquiryType;
import com.pobluesky.inquiry.entity.ProductType;
import com.pobluesky.inquiry.entity.Progress;
import com.pobluesky.lineitem.dto.response.LineItemResponseDTO;
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
    Boolean isActivated
) {

    public static InquiryResponseDTO of(
        Inquiry inquiry,
        List<LineItemResponseDTO> lineItemResponseDTOs,
        UserClient userClient
    ) {
        Customer customer = userClient.getCustomerById(inquiry.getCustomerId());
        ManagerSummaryResponseDTO salesManagerSummaryDto = userClient.getManagerSummaryById(inquiry.getSalesManagerId());
        ManagerSummaryResponseDTO qualityManagerSummaryDto = userClient.getManagerSummaryById(inquiry.getQualityManagerId());


        return InquiryResponseDTO.builder()
            .inquiryId(inquiry.getInquiryId())
            .customerId(customer.getUserId())
            .name(customer.getName())
            .customerName(customer.getCustomerName())
            .customerCode(customer.getCustomerCode())
            .corporationCode(customer.getCustomerCode())
            .email(customer.getEmail())
            .phone(customer.getPhone())
            .country(inquiry.getCountry())
            .corporate(inquiry.getCorporate())
            .salesPerson(inquiry.getSalesPerson())
            .salesManagerSummaryDto(
                salesManagerSummaryDto
            )
            .qualityManagerSummaryDto(
                qualityManagerSummaryDto
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
            .build();
    }
}
