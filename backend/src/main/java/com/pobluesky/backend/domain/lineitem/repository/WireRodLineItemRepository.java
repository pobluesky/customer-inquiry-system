package com.pobluesky.backend.domain.lineitem.repository;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.lineitem.entity.HotRolledLineItem;
import com.pobluesky.backend.domain.lineitem.entity.WireRodLineItem;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface WireRodLineItemRepository extends JpaRepository<WireRodLineItem,Long> {

    @Query("SELECT c FROM WireRodLineItem c WHERE c.lineItemId = :lineItemId AND c.isActivated = true")
    Optional<WireRodLineItem> findActiveHotRolledLineItemById(@Param("lineItemId") Long lineItemId);

    @Query("SELECT c FROM WireRodLineItem c WHERE c.inquiry = :inquiry AND c.isActivated = true")
    List<WireRodLineItem> findActiveHotRolledLineItemByInquiry(Inquiry inquiry);
}
