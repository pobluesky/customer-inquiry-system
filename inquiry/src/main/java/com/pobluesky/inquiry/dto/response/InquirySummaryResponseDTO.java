package com.pobluesky.inquiry.dto.response;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.pobluesky.config.global.util.model.JsonResult;
import com.pobluesky.feign.Customer;
import com.pobluesky.feign.Manager;
import com.pobluesky.feign.UserClient;
import com.pobluesky.inquiry.entity.Country;
import com.pobluesky.inquiry.entity.Industry;
import com.pobluesky.inquiry.entity.Inquiry;
import com.pobluesky.inquiry.entity.InquiryType;
import com.pobluesky.inquiry.entity.ProductType;
import com.pobluesky.inquiry.entity.Progress;
import jakarta.jws.soap.SOAPBinding.Use;
import lombok.Builder;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Builder
public record InquirySummaryResponseDTO(
    Long inquiryId,
    String salesPerson, //판매 계약자 e.g. 현대종합상사(주)
    Progress progress,  //진행현황 e.g. 접수 -> 1차검토 -> ..
    ProductType productType, //제품구분 e.g. 자동차, 열연, ..
    InquiryType inquiryType, //유형 e.g 품질문의, 공통(견적/품질문의)
    String customerName,  //고객사명 e.g. AAT
    Country country, //국가 e.g. USA
    String corporate, //판매 상사 e.g. POA
    String corporationCode, //법인 코드
    Industry industry, //산업 분류 e.g. AUTOMOBILE
    String salesManagerName,
    String qualityManagerName
) {

    public static InquirySummaryResponseDTO from(Inquiry inquiry, UserClient userClient) {

        Customer customer = userClient.getCustomerByIdWithoutToken(inquiry.getInquiryId()).getData();

        String salesManagerName = null;
        String qualityManagerName = null;

        try {
            // Sales Manager의 정보 가져오기
            if (inquiry.getSalesManagerId() != null) {
                ManagerSummaryResponseDTO salesManager = userClient.getManagerSummaryById(inquiry.getSalesManagerId()).getData();
                // salesManager가 null이 아니면 이름 가져오기
                if (salesManager != null) {
                    salesManagerName = salesManager.name();
                }
            }
        } catch (Exception e) {
            // 예외 발생 시 로그 남기기
            log.error("Failed to fetch sales manager summary for userId: {}", inquiry.getSalesManagerId(), e);
        }

        try {
            // Quality Manager의 정보 가져오기
            if (inquiry.getQualityManagerId() != null) {
                ManagerSummaryResponseDTO qualityManager = userClient.getManagerSummaryById(inquiry.getQualityManagerId()).getData();
                // qualityManager가 null이 아니면 이름 가져오기
                if (qualityManager != null) {
                    qualityManagerName = qualityManager.name();
                }
            }
        } catch (Exception e) {
            // 예외 발생 시 로그 남기기
            log.error("Failed to fetch quality manager summary for userId: {}", inquiry.getQualityManagerId(), e);
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
            .salesManagerName(
                salesManagerName
            )
            .qualityManagerName(
                qualityManagerName
            )
            .build();
    }
}
