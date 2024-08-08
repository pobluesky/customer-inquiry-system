package com.pobluesky.backend.domain.notification.repository;

import com.pobluesky.backend.domain.notification.entity.CustomerNotification;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerNotificationRepository extends JpaRepository<CustomerNotification, Long> {

    List<CustomerNotification> findByCustomer_CustomerId(Long customerId);

    @Query("SELECT cn FROM CustomerNotification cn WHERE cn.customer.customerId = :customerId AND cn.isRead = :isRead ORDER BY cn.createdDate DESC")
    Page<CustomerNotification> findRecentNotificationsByCustomerIdAndIsRead(
        @Param("customerId") Long customerId,
        @Param("isRead") Boolean isRead,
        Pageable pageable
    );

}
