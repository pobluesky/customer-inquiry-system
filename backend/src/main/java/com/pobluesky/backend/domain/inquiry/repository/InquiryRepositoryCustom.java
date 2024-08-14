package com.pobluesky.backend.domain.inquiry.repository;

import com.pobluesky.backend.domain.inquiry.dto.response.InquirySummaryResponseDTO;
import com.pobluesky.backend.domain.inquiry.entity.InquiryType;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.entity.Progress;
import java.time.LocalDate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface InquiryRepositoryCustom {
    Page<InquirySummaryResponseDTO> findInquiries(
        Long userId, Pageable pageable, Progress progress,
        ProductType productType, String customerName, InquiryType inquiryType,
        String projectName, LocalDate startDate, LocalDate endDate);
}
