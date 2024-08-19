package com.pobluesky.backend.domain.inquiry.repository;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InquiryRepository extends JpaRepository<Inquiry, Long>, InquiryRepositoryCustom{

    Optional<Inquiry> findByCustomer_UserIdAndInquiryId(Long userId, Long inquiryId);
}
