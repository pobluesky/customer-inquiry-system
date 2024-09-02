package com.pobluesky.inquiry.repository;

import com.pobluesky.inquiry.entity.Inquiry;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface InquiryRepository extends JpaRepository<Inquiry, Long>, InquiryRepositoryCustom{

    @Query("SELECT i FROM Inquiry i WHERE i.inquiryId = :inquiryId AND i.customerId = :userId AND i.isActivated = true")
    Optional<Inquiry> findByCustomerIdAndInquiryId(Long userId, Long inquiryId);

    @Query("SELECT i FROM Inquiry i WHERE i.inquiryId = :inquiryId AND i.isActivated = true")
    Optional<Inquiry> findActiveInquiryByInquiryId(Long inquiryId);
}
