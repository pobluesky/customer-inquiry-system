package com.pobluesky.backend.domain.inquiry.dto.response;

import com.pobluesky.backend.domain.inquiry.entity.Country;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.lineitem.dto.response.LineItemResponseDTO;

import lombok.Builder;

import java.time.LocalDateTime;

import java.util.List;
import java.util.Optional;

@Builder
public record MobileInquiryResponseDTO(
    Long inquiryId,
    Long customerId,
    String name,
    String customerName,
    String customerCode,
    String email,
    String phone,
    Country country,
    String corporate,
    String salesPerson,
    String managerName,
    String managerDepartment,
    String inquiryType,
    String industry,
    String corporationCode,
    String productType,
    String progress,
    String customerRequestDate,
    String additionalRequests,
    String fileName,
    String filePath,
    String responseDeadline,
    List<LineItemResponseDTO> lineItemResponseDTOs,
    String customInquiryId,
    Boolean isActivated
) {
    public static MobileInquiryResponseDTO of(Inquiry inquiry, List<LineItemResponseDTO> lineItemResponseDTOs) {

        return MobileInquiryResponseDTO.builder()
            .inquiryId(inquiry.getInquiryId())
            .customerId(inquiry.getCustomer().getUserId())
            .name(inquiry.getCustomer().getName())
            .customerName(inquiry.getCustomer().getCustomerName())
            .customerCode(inquiry.getCustomer().getCustomerCode())
            .email(inquiry.getCustomer().getEmail())
            .phone(inquiry.getCustomer().getPhone())
            .country(inquiry.getCountry())
            .corporate(inquiry.getCorporate())
            .salesPerson(inquiry.getSalesPerson())
            .managerName(getManagerName(inquiry))
            .managerDepartment(getManagerDepartment(inquiry))
            .inquiryType(inquiry.getInquiryType().getKoreanName())
            .industry(inquiry.getIndustry().getKoreanName())
            .corporationCode(inquiry.getCorporationCode())
            .productType(inquiry.getProductType().getKoreanName())
            .progress(inquiry.getProgress().getKoreanName())
            .customerRequestDate(inquiry.getCustomerRequestDate())
            .additionalRequests(inquiry.getAdditionalRequests())
            .fileName(inquiry.getFileName())
            .filePath(inquiry.getFilePath())
            .responseDeadline(inquiry.getResponseDeadline())
            .lineItemResponseDTOs(lineItemResponseDTOs)
            .customInquiryId(generateCustomInquiryId(inquiry.getCreatedDate(), inquiry.getInquiryId()))
            .isActivated(inquiry.getIsActivated())
            .build();
    }

    private static String getManagerName(Inquiry inquiry) {
        return Optional.ofNullable(inquiry.getSalesManager())
            .map(manager -> manager.getName())
            .orElse(null);
    }

    private static String getManagerDepartment(Inquiry inquiry) {
        return Optional.ofNullable(inquiry.getSalesManager())
            .map(manager -> manager.getDepartment().getName())
            .orElse(null);
    }

    static String generateCustomInquiryId(LocalDateTime createdDate, Long inquiryId) {
        String createdDateString = createdDate.toString();

        return "#" + createdDateString.split("T")[0].replace("-", "") + "P" + inquiryId;
    }
}
