package com.pobluesky.backend.domain.notification.dto.response;

import com.pobluesky.backend.domain.notification.entity.ManagerNotification;
import lombok.Builder;

@Builder
public record ManagerNotificationResponseDTO(
    Long notificationId,
    Long managerId,
    String notificationContents,
    boolean isRead
) {
    public static ManagerNotificationResponseDTO from(ManagerNotification managerNotification) {
        return ManagerNotificationResponseDTO.builder()
            .notificationId(managerNotification.getNotificationId())
            .managerId(managerNotification.getManager().getManagerId())
            .notificationContents(managerNotification.getNotificationContents())
            .isRead(managerNotification.getIsRead())
            .build();
    }
}