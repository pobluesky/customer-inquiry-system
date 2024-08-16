package com.pobluesky.backend.domain.notification.dto.request;

public record ManagerNotificationUpdateRequestDTO(
    Long notificationId,
    Long userId,
    String notificationContents,
    Boolean isRead
) {
}
