package com.pobluesky.backend.domain.notification.dto.response;

import com.pobluesky.backend.domain.notification.entity.CustomerNotification;
import lombok.Builder;

@Builder
public record CustomerNotificationResponseDTO(
      Long notificationId,
      Long customerId,
      String notificationContents,
      boolean readOrNot
) {
    public static CustomerNotificationResponseDTO from(CustomerNotification customerNotification) {
        return CustomerNotificationResponseDTO.builder()
            .notificationId(customerNotification.getNotificationId())
            .customerId(customerNotification.getCustomer().getCustomerId())
            .notificationContents(customerNotification.getNotificationContents())
            .readOrNot(customerNotification.getReadOrNot())
            .build();
    }
}