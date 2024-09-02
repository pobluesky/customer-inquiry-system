package com.pobluesky.backend.domain.inquiry.repository;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;

import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface InquiryRepository extends JpaRepository<Inquiry, Long>, InquiryRepositoryCustom{

    @Query("SELECT i FROM Inquiry i WHERE i.inquiryId = :inquiryId AND i.customer.userId = :userId AND i.isActivated = true")
    Optional<Inquiry> findByCustomer_UserIdAndInquiryId(Long userId, Long inquiryId);

    @Query("SELECT i FROM Inquiry i WHERE i.inquiryId = :inquiryId AND i.isActivated = true")
    Optional<Inquiry> findActiveInquiryByInquiryId(Long inquiryId);

    @Query("SELECT i FROM Inquiry i "
        + "WHERE i.customer.userId = :customerId "
        + "AND i.productType = :productType "
        + "AND i.isActivated = true "
        + "ORDER BY i.createdDate DESC")
    List<Inquiry> findInquiriesByCustomerIdAndProductType(Long customerId, ProductType productType);

    @Query("SELECT i FROM Inquiry i "
        + "WHERE i.customer.userId = :customerId "
        + "AND i.productType = :productType "
        + "AND i.isActivated = true "
        + "AND i.isFavorite = true "
        + "ORDER BY i.createdDate DESC")
    List<Inquiry> findFavoriteInquiriesByCustomerIdAndProductType(Long customerId, ProductType productType);
}
