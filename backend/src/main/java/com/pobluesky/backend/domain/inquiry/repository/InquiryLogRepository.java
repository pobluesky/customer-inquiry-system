package com.pobluesky.backend.domain.inquiry.repository;

import com.pobluesky.backend.domain.inquiry.entity.InquiryLog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InquiryLogRepository extends JpaRepository<InquiryLog, Long> {
    List<InquiryLog> findByInquiryInquiryIdOrderByCreatedDateAsc(Long inquiryId);
}
