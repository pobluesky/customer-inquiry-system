package com.pobluesky.backend.domain.lineitem.repository;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.lineitem.entity.CarLineItem;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarLineItemRepository extends JpaRepository<CarLineItem, Long> {

    List<CarLineItem> findAllByInquiry(Inquiry inquiry);
}
