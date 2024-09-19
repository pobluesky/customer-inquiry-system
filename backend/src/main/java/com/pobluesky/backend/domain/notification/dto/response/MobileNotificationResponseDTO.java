package com.pobluesky.backend.domain.notification.dto.response;

import com.pobluesky.backend.domain.notification.entity.ManagerNotification;

import lombok.Builder;

@Builder
public record MobileNotificationResponseDTO(
    Long notificationId,
    Long userId,
    String notificationContents,
    boolean isRead
) {
    public static MobileNotificationResponseDTO from(ManagerNotification managerNotification) {
        return MobileNotificationResponseDTO.builder()
            .notificationId(managerNotification.getNotificationId())
            .userId(managerNotification.getManager().getUserId())
            .notificationContents(managerNotification.getNotificationContents())
            .isRead(managerNotification.getIsRead())
            .build();
    }
}
