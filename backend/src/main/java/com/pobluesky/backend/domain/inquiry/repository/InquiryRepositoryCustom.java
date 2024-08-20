package com.pobluesky.backend.domain.inquiry.repository;

import com.pobluesky.backend.domain.inquiry.dto.response.InquirySummaryResponseDTO;
import com.pobluesky.backend.domain.inquiry.entity.InquiryType;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.entity.Progress;

import java.time.LocalDate;

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
        LocalDate endDate
    );

    Page<InquirySummaryResponseDTO> findInquiriesByManager(
        Pageable pageable,
        Progress progress,
        ProductType productType,
        String customerName,
        InquiryType inquiryType,
        LocalDate startDate,
        LocalDate endDate
    );
}
