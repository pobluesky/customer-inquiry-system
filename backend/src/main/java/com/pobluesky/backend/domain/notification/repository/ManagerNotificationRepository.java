package com.pobluesky.backend.domain.notification.repository;

import com.pobluesky.backend.domain.notification.entity.CustomerNotification;
import com.pobluesky.backend.domain.notification.entity.ManagerNotification;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ManagerNotificationRepository extends JpaRepository<ManagerNotification, Long> {

    @Query("SELECT mn FROM ManagerNotification mn WHERE mn.manager.managerId = :managerId AND mn.isRead = :isRead ORDER BY mn.createdDate DESC")
    Page<ManagerNotification> findRecentNotificationsByManagerIdAndIsRead(
        @Param("managerId") Long managerId,
        @Param("isRead") Boolean isRead,
        Pageable pageable
    );
}
