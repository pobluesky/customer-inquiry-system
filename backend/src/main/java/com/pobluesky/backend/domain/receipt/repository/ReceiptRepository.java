package com.pobluesky.backend.domain.receipt.repository;

import com.pobluesky.backend.domain.offersheet.entity.OfferSheet;
import com.pobluesky.backend.domain.receipt.entity.Receipt;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ReceiptRepository extends JpaRepository<Receipt, Long> {

    @Query("SELECT r FROM Receipt r WHERE r.offerSheet = :offerSheet AND r.isActivated = true")
    List<Receipt> findActiveReceiptByOfferSheet(@Param("offerSheet") OfferSheet offerSheet);

    @Query("SELECT r FROM Receipt r WHERE r.receiptId = :receiptId AND r.isActivated = true")
    Optional<Receipt> findActiveReceiptById(@Param("receiptId") Long receiptId);
}
