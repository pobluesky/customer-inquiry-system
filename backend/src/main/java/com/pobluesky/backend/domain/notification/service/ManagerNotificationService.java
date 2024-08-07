package com.pobluesky.backend.domain.notification.service;

import com.pobluesky.backend.domain.notification.repository.ManagerNotificationRepository;
import com.pobluesky.backend.domain.user.repository.ManagerRepository;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class ManagerNotificationService extends NotificationService {

    public ManagerNotificationService(
        ManagerNotificationRepository managerNotificationRepository,
        ManagerRepository managerRepository
    ) {
        super(null, managerNotificationRepository, null, managerRepository, NotificationType.MANAGER);
    }
}
