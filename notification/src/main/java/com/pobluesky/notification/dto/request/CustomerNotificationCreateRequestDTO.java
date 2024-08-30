package com.pobluesky.notification.dto.request;


import com.pobluesky.notification.dto.response.Customer;
import com.pobluesky.notification.entity.CustomerNotification;

public record CustomerNotificationCreateRequestDTO(
    String notificationContents
) {
    public CustomerNotification toCustomerNotificationEntity(Customer customer) {
        return CustomerNotification.builder()
                .userId(customer.getUserId())
                .notificationContents(notificationContents)
                .build();
    }
}