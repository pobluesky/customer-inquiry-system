package com.pobluesky.backend.domain.notification.service;

import com.pobluesky.backend.domain.notification.repository.CustomerNotificationRepository;
import com.pobluesky.backend.domain.user.repository.CustomerRepository;
import org.springframework.stereotype.Service;

@Service
public class CustomerNotificationService extends NotificationService {

    public CustomerNotificationService(
        CustomerNotificationRepository customerNotificationRepository,
        CustomerRepository customerRepository
    ) {
        super(customerNotificationRepository, null, customerRepository, null, NotificationType.CUSTOMER);
    }
}
