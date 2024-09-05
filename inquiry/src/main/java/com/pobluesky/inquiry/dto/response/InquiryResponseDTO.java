package com.pobluesky.inquiry.dto.response;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.pobluesky.config.global.util.model.JsonResult;
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
import lombok.extern.slf4j.Slf4j;

@Slf4j
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
        ManagerSummaryResponseDTO salesManager = null;
        ManagerSummaryResponseDTO qualityManager = null;
        Customer customer = userClient.getCustomerByIdWithoutToken(inquiry.getInquiryId()).getData();

        try {
            // Feign 클라이언트를 통해 매니저 정보 가져오기
            if (inquiry.getSalesManagerId() != null) {
                salesManager = userClient.getManagerSummaryById(inquiry.getSalesManagerId()).getData();
            }
        } catch (Exception e) {
            // 예외 발생 시 로그 남기기
            log.error("Failed to fetch sales manager summary for userId: {}", inquiry.getSalesManagerId(), e);
        }

        try {
            if (inquiry.getQualityManagerId() != null) {
                qualityManager = userClient.getManagerSummaryById(inquiry.getQualityManagerId()).getData();
            }
        } catch (Exception e) {
            // 예외 발생 시 로그 남기기
            log.error("Failed to fetch quality manager summary for userId: {}", inquiry.getQualityManagerId(), e);
        }


        return InquiryResponseDTO.builder()
            .inquiryId(inquiry.getInquiryId())
            .customerId(inquiry.getCustomerId())
            .name(customer.getName())
            .customerName(customer.getCustomerName())
            .customerCode(customer.getCustomerCode())
            .corporationCode(inquiry.getCorporationCode())
            .email(customer.getEmail())
            .phone(customer.getPhone())
            .country(inquiry.getCountry())
            .corporate(inquiry.getCorporate())
            .salesPerson(inquiry.getSalesPerson())
            .salesManagerSummaryDto(
                salesManager
            )
            .qualityManagerSummaryDto(
                qualityManager
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
