package com.pobluesky.backend.domain.notification.controller;

import com.pobluesky.backend.domain.notification.dto.request.CustomerNotificationCreateRequestDTO;
import com.pobluesky.backend.domain.notification.dto.request.CustomerNotificationUpdateRequestDTO;
import com.pobluesky.backend.domain.notification.dto.request.ManagerNotificationCreateRequestDTO;
import com.pobluesky.backend.domain.notification.dto.request.ManagerNotificationUpdateRequestDTO;
import com.pobluesky.backend.domain.notification.dto.response.CustomerNotificationResponseDTO;
import com.pobluesky.backend.domain.notification.dto.response.ManagerNotificationResponseDTO;
import com.pobluesky.backend.domain.notification.service.NotificationService;
import com.pobluesky.backend.domain.notification.service.NotificationType;
import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.JsonResult;
import lombok.RequiredArgsConstructor;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/notifications")
public class NotificationController {

    private final NotificationService notificationService;

    // 고객사
    @GetMapping("/customers/{customerId}")
    public ResponseEntity<JsonResult> getCustomerNotificationsById(
        @PathVariable Long customerId
    ) {

        List<?> notification = notificationService.getNotificationsById(customerId, NotificationType.CUSTOMER);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(notification));
    }

    @GetMapping("/customers/read/{customerId}")
    public ResponseEntity<JsonResult> getRecentCustomerNotificationById(
        @PathVariable Long customerId) {

        List<?> notificationById = notificationService.getRecentNotifications(customerId, NotificationType.CUSTOMER);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(notificationById));
    }

    @PostMapping("/customers/{customerId}")
    public ResponseEntity<JsonResult> createCustomerNotification(
        @RequestBody CustomerNotificationCreateRequestDTO dto,
        @PathVariable Long customerId) {

        CustomerNotificationResponseDTO notification = (CustomerNotificationResponseDTO) notificationService.createNotification(dto, customerId, NotificationType.CUSTOMER);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(notification));
    }

    @PutMapping("/customers/{notificationId}")
    public ResponseEntity<JsonResult> updateCustomerNotificationIsRead(
        @PathVariable Long notificationId,
        @RequestBody CustomerNotificationUpdateRequestDTO dto
    ) {
        CustomerNotificationResponseDTO notification = (CustomerNotificationResponseDTO) notificationService.updateNotificationIsRead(notificationId, dto, NotificationType.CUSTOMER);

        return ResponseEntity.status(HttpStatus.OK)
           .body(ResponseFactory.getSuccessJsonResult(notification));
    }


    // 담당자
    @GetMapping("/managers/{managerId}")
    public ResponseEntity<JsonResult> getAllManagerNotifications(
        @PathVariable Long managerId
    ) {

        List<?> notification = notificationService.getNotificationsById(managerId, NotificationType.MANAGER);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(notification));
    }

    @GetMapping("/managers/read/{managerId}")
    public ResponseEntity<JsonResult> getRecentManagerNotificationById(
        @PathVariable Long managerId) {

        List<?> notificationById = notificationService.getRecentNotifications(managerId, NotificationType.MANAGER);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(notificationById));
    }

    @PostMapping("/managers/{managerId}")
    public ResponseEntity<JsonResult> createManagerNotification(
        @RequestBody ManagerNotificationCreateRequestDTO dto,
        @PathVariable Long managerId) {

        ManagerNotificationResponseDTO notification = (ManagerNotificationResponseDTO) notificationService.createNotification(dto, managerId, NotificationType.MANAGER);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(notification));
    }

    @PutMapping("/managers/{notificationId}")
    public ResponseEntity<JsonResult> updateManagerNotificationIsRead(
        @PathVariable Long notificationId,
        @RequestBody ManagerNotificationUpdateRequestDTO dto
    ) {
        ManagerNotificationResponseDTO notification = (ManagerNotificationResponseDTO) notificationService.updateNotificationIsRead(notificationId, dto, NotificationType.MANAGER);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(notification));
    }

}
