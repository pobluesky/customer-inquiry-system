package com.pobluesky.backend.domain.inquiry.repository;

import com.pobluesky.backend.domain.inquiry.dto.response.InquirySummaryResponseDTO;
import com.pobluesky.backend.domain.inquiry.entity.Industry;
import com.pobluesky.backend.domain.inquiry.entity.InquiryType;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.entity.Progress;

import java.time.LocalDate;

import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface InquiryRepositoryCustom {
    Page<InquirySummaryResponseDTO> findInquiriesByCustomer(
        Long userId,
        Pageable pageable,
        Progress progress,
        ProductType productType,
        String customerName,
        InquiryType inquiryType,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy
    );

    Page<InquirySummaryResponseDTO> findInquiriesByManager(
        Pageable pageable,
        Progress progress,
        ProductType productType,
        String customerName,
        InquiryType inquiryType,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy
    );

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
        String sortBy
    );

    List<InquirySummaryResponseDTO> findInquiriesByManagerWithoutPaging(
        Progress progress,
        ProductType productType,
        String customerName,
        InquiryType inquiryType,
        String salesPerson,
        Industry industry,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy
    );
}
