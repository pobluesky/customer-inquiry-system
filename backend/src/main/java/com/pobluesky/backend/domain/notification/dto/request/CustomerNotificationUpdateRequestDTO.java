package com.pobluesky.backend.domain.notification.dto.request;

public record CustomerNotificationUpdateRequestDTO(
    Long notificationId,
    Long customerId,
    String notificationContents,
    boolean isRead
) {
}
