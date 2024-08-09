package com.pobluesky.backend.domain.inquiry.repository;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.entity.Progress;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InquiryRepository extends JpaRepository<Inquiry, Long> {
    List<Inquiry> findByCustomer_CustomerIdAndIsActivatedTrue(Long customerId);
    Optional<Inquiry> findByCustomer_CustomerIdAndInquiryId(Long customerId, Long inquiryId);
    List<Inquiry> findByProgress(Progress progress);
}
