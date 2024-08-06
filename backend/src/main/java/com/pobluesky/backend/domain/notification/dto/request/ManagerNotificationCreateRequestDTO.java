package com.pobluesky.backend.domain.notification.dto.request;

import com.pobluesky.backend.domain.notification.entity.ManagerNotification;
import com.pobluesky.backend.domain.user.entity.Manager;

public record ManagerNotificationCreateRequestDTO(
    String contents
) {
    public ManagerNotification toManagerNotificationEntity(Manager manager) {
        return ManagerNotification.builder()
            .manager(manager)
            .notificationContents(contents)
            .readOrNot(false)
            .build();
    }
}
