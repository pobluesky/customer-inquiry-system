package com.pobluesky.backend.domain.notification.dto.request;

import com.pobluesky.backend.domain.notification.entity.ManagerNotification;
import com.pobluesky.backend.domain.user.entity.Manager;

public record ManagerNotificationCreateRequestDTO(
    String notificationContents
) {
    public ManagerNotification toManagerNotificationEntity(Manager manager) {
        return ManagerNotification.builder()
            .manager(manager)
            .notificationContents(notificationContents)
            .readOrNot(false)
            .build();
    }
}
