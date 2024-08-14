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
import com.pobluesky.backend.domain.user.service.CustomUserDetailsService;
import com.pobluesky.backend.domain.user.service.SignService;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class NotificationService {

    private final SignService signService;

    private final CustomerNotificationRepository customerNotificationRepository;

    private final ManagerNotificationRepository managerNotificationRepository;

    private final CustomerRepository customerRepository;

    private final ManagerRepository managerRepository;

    public List<?> getNotificationsById(
        String token,
        Long id,
        NotificationType notificationType
    ) {
        Long userId = signService.parseToken(token);

        switch (notificationType) {
            case CUSTOMER:
                Customer customer = customerRepository.findById(userId)
                    .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

                if(!Objects.equals(customer.getUserId(), userId))
                    throw new CommonException(ErrorCode.USER_NOT_MATCHED);

                List<CustomerNotification> notifications =
                    customerNotificationRepository.findByCustomer_UserId(id);

                return notifications.stream()
                    .map(CustomerNotificationResponseDTO::from)
                    .collect(Collectors.toList());

            case MANAGER:
                Manager manager = managerRepository.findById(userId)
                    .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

                if(!Objects.equals(manager.getUserId(), userId))
                    throw new CommonException(ErrorCode.USER_NOT_MATCHED);

                List<ManagerNotification> managerNotifications =
                    managerNotificationRepository.findByManager_UserId(id);

                return managerNotifications.stream()
                    .map(ManagerNotificationResponseDTO::from)
                    .collect(Collectors.toList());

            default:
                throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }
    }

    public List<?> getRecentNotifications(
        String token,
        Long id,
        NotificationType notificationType
    ) {
        Long userId = signService.parseToken(token);

        Pageable pageable = PageRequest.of(0, 10);

        switch (notificationType) {
            case CUSTOMER:
                Customer customer = customerRepository.findById(userId)
                    .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

                if(!Objects.equals(customer.getUserId(), userId))
                    throw new CommonException(ErrorCode.USER_NOT_MATCHED);

                var customerPage =
                    customerNotificationRepository.findRecentNotificationsByCustomerIdAndIsRead(
                        id,
                        true,
                        pageable
                    );

                return customerPage.getContent().stream()
                    .map(CustomerNotificationResponseDTO::from)
                    .collect(Collectors.toList());

            case MANAGER:
                Manager manager = managerRepository.findById(userId)
                    .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

                if(!Objects.equals(manager.getUserId(), userId))
                    throw new CommonException(ErrorCode.USER_NOT_MATCHED);

                var managerPage =
                    managerNotificationRepository.findRecentNotificationsByManagerIdAndIsRead(
                        id,
                        true,
                        pageable
                    );

                return managerPage.getContent().stream()
                    .map(ManagerNotificationResponseDTO::from)
                    .collect(Collectors.toList());

            default:
                throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }
    }

    public Object createNotification(
        String token,
        Object dto,
        Long id,
        NotificationType notificationType
    ) {
        Long userId = signService.parseToken(token);

        switch (notificationType) {
            case CUSTOMER:
                Customer customer = customerRepository.findById(userId)
                    .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

                if(!Objects.equals(customer.getUserId(), userId))
                    throw new CommonException(ErrorCode.USER_NOT_MATCHED);

                CustomerNotification customerNotification =
                    ((CustomerNotificationCreateRequestDTO) dto)
                        .toCustomerNotificationEntity(customer);

                CustomerNotification savedCustomerNotification =
                    customerNotificationRepository.save(customerNotification);

                return CustomerNotificationResponseDTO.from(savedCustomerNotification);

            case MANAGER:
                Manager manager = managerRepository.findById(userId)
                    .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

                if(!Objects.equals(manager.getUserId(), userId))
                    throw new CommonException(ErrorCode.USER_NOT_MATCHED);

                ManagerNotification managerNotification =
                    ((ManagerNotificationCreateRequestDTO) dto)
                        .toManagerNotificationEntity(manager);

                ManagerNotification savedManagerNotification =
                    managerNotificationRepository.save(managerNotification);

                return ManagerNotificationResponseDTO.from(savedManagerNotification);

            default:
                throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }
    }

    public Object updateNotificationIsRead(
        String token,
        Long notificationId,
        Object dto,
        NotificationType notificationType
    ) {
        Long userId = signService.parseToken(token);

        switch (notificationType)
        {
            case CUSTOMER:
                Customer customer = customerRepository.findById(userId)
                    .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

                if(!Objects.equals(customer.getUserId(), userId))
                    throw new CommonException(ErrorCode.USER_NOT_MATCHED);

                CustomerNotification customerNotification =
                    customerNotificationRepository.findById(notificationId)
                    .orElseThrow(() -> new CommonException(ErrorCode.NOTIFICATION_NOT_FOUND));

                CustomerNotificationUpdateRequestDTO updateCustomerDTO =
                    (CustomerNotificationUpdateRequestDTO) dto;

                customerNotification.updateIsRead(updateCustomerDTO.isRead());
                customerNotificationRepository.save(customerNotification);

                return CustomerNotificationResponseDTO.from(customerNotification);

            case MANAGER:
                Manager manager = managerRepository.findById(userId)
                    .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

                if(!Objects.equals(manager.getUserId(), userId))
                    throw new CommonException(ErrorCode.USER_NOT_MATCHED);

                ManagerNotification managerNotification =
                    managerNotificationRepository.findById(notificationId)
                    .orElseThrow(() -> new CommonException(ErrorCode.NOTIFICATION_NOT_FOUND));

                ManagerNotificationUpdateRequestDTO updateManagerDTO =
                    (ManagerNotificationUpdateRequestDTO) dto;

                managerNotification.updateIsRead(updateManagerDTO.isRead());
                managerNotificationRepository.save(managerNotification);

                return ManagerNotificationResponseDTO.from(managerNotification);

            default:
                throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }
    }
}
