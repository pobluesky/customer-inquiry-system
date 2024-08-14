package com.pobluesky.backend.domain.inquiry.repository;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.entity.Progress;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface InquiryRepository extends JpaRepository<Inquiry, Long>, InquiryRepositoryCustom{
    List<Inquiry> findByCustomer_UserIdAndIsActivatedTrue(Long userId);
    Optional<Inquiry> findByCustomer_UserIdAndInquiryId(Long userId, Long inquiryId);
    List<Inquiry> findByProgress(Progress progress);
}
