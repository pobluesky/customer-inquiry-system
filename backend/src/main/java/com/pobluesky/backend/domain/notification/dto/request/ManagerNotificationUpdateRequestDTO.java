package com.pobluesky.backend.domain.notification.dto.request;

public record ManagerNotificationUpdateRequestDTO(
    Long notificationId,
    Long managerId,
    String notificationContents,
    boolean isRead
) {
}
