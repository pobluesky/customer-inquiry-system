package com.pobluesky.backend.domain.notification.dto.request;

import com.pobluesky.backend.domain.notification.entity.CustomerNotification;
import com.pobluesky.backend.domain.user.entity.Customer;

public record CustomerNotificationCreateRequestDTO(
    String contents
) {
    public CustomerNotification toCustomerNotificationEntity(Customer customer) {
        return CustomerNotification.builder()
                .customer(customer)
                .notificationContents(contents)
                .readOrNot(false)
                .build();
    }
}