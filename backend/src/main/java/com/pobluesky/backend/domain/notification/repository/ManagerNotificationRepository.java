package com.pobluesky.backend.domain.notification.repository;

import com.pobluesky.backend.domain.notification.dto.response.MobileNotificationResponseDTO;
import com.pobluesky.backend.domain.notification.entity.ManagerNotification;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ManagerNotificationRepository extends JpaRepository<ManagerNotification, Long> {

    List<ManagerNotification> findByManager_UserIdAndIsReadFalseOrderByCreatedDateDesc(Long userId);

    @Query("SELECT mn FROM ManagerNotification mn WHERE mn.manager.userId = :userId AND mn.isRead = :isRead ORDER BY mn.createdDate DESC")
    Page<ManagerNotification> findRecentNotificationsByuserIdAndIsRead(
        @Param("userId") Long userId,
        @Param("isRead") Boolean isRead,
        Pageable pageable
    );

    @Query("SELECT mn FROM ManagerNotification mn WHERE mn.manager.userId = :userId AND mn.isRead = :isRead ORDER BY mn.createdDate DESC")
    List<ManagerNotification> findRecentNotificationsByuserIdAndIsReadForMobile(
            @Param("userId") Long userId,
            @Param("isRead") Boolean isRead
    );

    @Query("SELECT COUNT(mn) FROM ManagerNotification mn WHERE mn.manager.userId = :userId AND mn.isRead = false")
    long countUnreadNotificationsByManager_UserId(@Param("userId") Long userId);
}
