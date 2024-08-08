package com.pobluesky.backend.domain.notification.dto.response;

import com.pobluesky.backend.domain.notification.entity.CustomerNotification;
import java.time.LocalDateTime;
import lombok.Builder;

@Builder
public record CustomerNotificationResponseDTO(
    Long notificationId,
    Long customerId,
    String notificationContents,
    boolean isRead,
    LocalDateTime createdDate

) {
    public static CustomerNotificationResponseDTO from(CustomerNotification customerNotification) {
        return CustomerNotificationResponseDTO.builder()
            .notificationId(customerNotification.getNotificationId())
            .customerId(customerNotification.getCustomer().getCustomerId())
            .notificationContents(customerNotification.getNotificationContents())
            .isRead(customerNotification.getIsRead())
            .createdDate(customerNotification.getCreatedDate())
            .build();
    }
}