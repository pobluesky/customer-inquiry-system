package com.pobluesky.backend.domain.notification.service;

import com.pobluesky.backend.domain.notification.dto.request.CustomerNotificationCreateRequestDTO;
import com.pobluesky.backend.domain.notification.dto.request.CustomerNotificationUpdateRequestDTO;
import com.pobluesky.backend.domain.notification.dto.request.ManagerNotificationCreateRequestDTO;
import com.pobluesky.backend.domain.notification.dto.request.ManagerNotificationUpdateRequestDTO;
import com.pobluesky.backend.domain.notification.dto.response.CustomerNotificationResponseDTO;
import com.pobluesky.backend.domain.notification.dto.response.ManagerNotificationResponseDTO;
import com.pobluesky.backend.domain.notification.entity.CustomerNotification;
import com.pobluesky.backend.domain.notification.entity.ManagerNotification;
import com.pobluesky.backend.domain.notification.repository.CustomerNotificationRepository;
import com.pobluesky.backend.domain.notification.repository.ManagerNotificationRepository;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.user.entity.Manager;
import com.pobluesky.backend.domain.user.repository.CustomerRepository;
import com.pobluesky.backend.domain.user.repository.ManagerRepository;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;
import lombok.RequiredArgsConstructor;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class NotificationService {

    private final CustomerNotificationRepository customerNotificationRepository;

    private final ManagerNotificationRepository managerNotificationRepository;

    private final CustomerRepository customerRepository;

    private final ManagerRepository managerRepository;

    @Transactional(readOnly = true)
    public List<CustomerNotificationResponseDTO> getAllCustomerNotifications() {

        List<CustomerNotification> notifications = customerNotificationRepository.findAll();

        return notifications.stream()
            .map(CustomerNotificationResponseDTO::from)
            .collect(Collectors.toList());
    }

    @Transactional
    public CustomerNotificationResponseDTO createCustomerNotification(
        CustomerNotificationCreateRequestDTO dto, Long customerId) {

        Customer customer = customerRepository.findById(customerId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        CustomerNotification notification = dto.toCustomerNotificationEntity(customer);

        CustomerNotification savedNotification = customerNotificationRepository.save(notification);

        return CustomerNotificationResponseDTO.from(savedNotification);
    }

    @Transactional(readOnly = true)
    public List<CustomerNotificationResponseDTO> getRecentCustomerNotificationsById(Long customerId) {
        Pageable pageable = PageRequest.of(0, 10);
        var page = customerNotificationRepository.findRecentNotificationsByCustomerIdAndIsRead(customerId, Boolean.TRUE, pageable);
        return page.getContent().stream()
            .map(CustomerNotificationResponseDTO::from)
            .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<ManagerNotificationResponseDTO> getAllManagerNotifications() {

        List<ManagerNotification> notifications = managerNotificationRepository.findAll();

        return notifications.stream()
            .map(ManagerNotificationResponseDTO::from)
            .collect(Collectors.toList());
    }

    @Transactional
    public ManagerNotificationResponseDTO createManagerNotification(
        ManagerNotificationCreateRequestDTO dto, Long managerId) {

        Manager manager = managerRepository.findById(managerId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        ManagerNotification notification = dto.toManagerNotificationEntity(manager);

        ManagerNotification savedNotification = managerNotificationRepository.save(notification);

        return ManagerNotificationResponseDTO.from(savedNotification);
    }

    @Transactional(readOnly = true)
    public List<ManagerNotificationResponseDTO> getRecentManagerNotificationsById(Long managerId) {
        Pageable pageable = PageRequest.of(0, 10);
        var page = managerNotificationRepository.findRecentNotificationsByManagerIdAndIsRead(managerId, Boolean.TRUE, pageable);
        return page.getContent().stream()
            .map(ManagerNotificationResponseDTO::from)
            .collect(Collectors.toList());
    }

    @Transactional
    public CustomerNotificationResponseDTO updateCustomerNotificationIsRead(Long notificationId, CustomerNotificationUpdateRequestDTO dto) {
        CustomerNotification notification = customerNotificationRepository.findById(notificationId)
           .orElseThrow(() -> new CommonException(ErrorCode.NOTIFICATION_NOT_FOUND));

        notification.updateIsRead();
        customerNotificationRepository.save(notification);

        return CustomerNotificationResponseDTO.from(notification);
    }

    @Transactional
    public ManagerNotificationResponseDTO updateManagerNotificationIsRead(Long notificationId, ManagerNotificationUpdateRequestDTO dto) {
        ManagerNotification notification = managerNotificationRepository.findById(notificationId)
            .orElseThrow(() -> new CommonException(ErrorCode.NOTIFICATION_NOT_FOUND));

        notification.updateIsRead();
        managerNotificationRepository.save(notification);

        return ManagerNotificationResponseDTO.from(notification);
    }
}
