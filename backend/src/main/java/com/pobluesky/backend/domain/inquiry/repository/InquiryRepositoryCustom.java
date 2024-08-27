package com.pobluesky.backend.domain.inquiry.repository;

import com.pobluesky.backend.domain.inquiry.dto.response.InquirySummaryResponseDTO;
import com.pobluesky.backend.domain.inquiry.entity.Industry;
import com.pobluesky.backend.domain.inquiry.entity.InquiryType;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.entity.Progress;

import java.time.LocalDate;

import java.util.List;

public interface InquiryRepositoryCustom {

    List<InquirySummaryResponseDTO> findInquiriesByCustomerWithoutPaging(
        Long userId,
        Progress progress,
        ProductType productType,
        String customerName,
        InquiryType inquiryType,
        String salesPerson,
        Industry industry,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy,
        String salesManagerName,
        String qualityManagerName
    );

    List<InquirySummaryResponseDTO> findInquiriesBySalesManagerWithoutPaging(
        Progress progress,
        ProductType productType,
        String customerName,
        InquiryType inquiryType,
        String salesPerson,
        Industry industry,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy,
        String salesManagerName,
        String qualityManagerName
    );

    List<InquirySummaryResponseDTO> findInquiriesByQualityManagerWithoutPaging(
        Progress progress,
        ProductType productType,
        String customerName,
        InquiryType inquiryType,
        String salesPerson,
        Industry industry,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy,
        String salesManagerName,
        String qualityManagerName
    );
}
