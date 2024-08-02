package com.pobluesky.backend.domain.inquiry.repository;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.relational.core.sql.In;

public interface InquiryRepository extends JpaRepository<Inquiry, Long> {
    List<Inquiry> findByCustomer_CustomerIdAndIsDeletedFalse(Long customerId);
    Optional<Inquiry> findByCustomer_CustomerIdAndInquiryId(Long customerId, Long inquiryId);

}
