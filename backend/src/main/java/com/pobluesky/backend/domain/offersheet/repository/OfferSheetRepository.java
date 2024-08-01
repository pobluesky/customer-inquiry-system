package com.pobluesky.backend.domain.offersheet.repository;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.offersheet.entity.OfferSheet;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OfferSheetRepository extends JpaRepository<OfferSheet, Long> {
    Optional<OfferSheet> findByInquiry(Inquiry inquiry);
}
