package com.pobluesky.backend.domain.inquiry.repository;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InquiryRepository extends JpaRepository<Inquiry, Long> {
    List<Inquiry> findByCustomerCustomerIdAndIsDeletedFalse(Long customerId);

    Optional<Inquiry> findByCustomerCustomerIdAndInquiryId(Long customerId, Long inquiryId);
}
