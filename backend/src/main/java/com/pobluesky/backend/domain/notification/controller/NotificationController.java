package com.pobluesky.backend.domain.notification.controller;

import com.pobluesky.backend.domain.notification.dto.request.CustomerNotificationCreateRequestDTO;
import com.pobluesky.backend.domain.notification.dto.request.CustomerNotificationUpdateRequestDTO;
import com.pobluesky.backend.domain.notification.dto.request.ManagerNotificationCreateRequestDTO;
import com.pobluesky.backend.domain.notification.dto.request.ManagerNotificationUpdateRequestDTO;
import com.pobluesky.backend.domain.notification.dto.response.CustomerNotificationResponseDTO;
import com.pobluesky.backend.domain.notification.dto.response.ManagerNotificationResponseDTO;
import com.pobluesky.backend.domain.notification.service.NotificationService;
import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.JsonResult;
import java.util.List;
import lombok.RequiredArgsConstructor;
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
    @GetMapping("/customers")
    public ResponseEntity<JsonResult> getAllCustomerNotifications() {

        List<CustomerNotificationResponseDTO> notification = notificationService.getAllCustomerNotifications();

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(notification));
    }

    @GetMapping("/customers/{customerId}")
    public ResponseEntity<JsonResult> getRecentCustomerNotificationById(
        @PathVariable Long customerId) {

        List<CustomerNotificationResponseDTO> notificationById = notificationService.getRecentCustomerNotificationsById(customerId);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(notificationById));
    }

    @PostMapping("/customers/{customerId}")
    public ResponseEntity<JsonResult> createCustomerNotification(
        @RequestBody CustomerNotificationCreateRequestDTO dto,
        @PathVariable Long customerId) {

        CustomerNotificationResponseDTO notification = notificationService.createCustomerNotification(dto, customerId);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(notification));
    }

    @PutMapping("/customers/{notificationId}")
    public ResponseEntity<JsonResult> updateCustomerNotificationIsRead(
        @PathVariable Long notificationId,
        @RequestBody CustomerNotificationUpdateRequestDTO dto
    ) {
        CustomerNotificationResponseDTO notification = notificationService.updateCustomerNotificationIsRead(notificationId, dto);

        return ResponseEntity.status(HttpStatus.OK)
           .body(ResponseFactory.getSuccessJsonResult(notification));
    }


    // 담당자
    @GetMapping("/managers")
    public ResponseEntity<JsonResult> getAllManagerNotifications() {

        List<ManagerNotificationResponseDTO> notification = notificationService.getAllManagerNotifications();

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(notification));
    }

    @GetMapping("/managers/{managerId}")
    public ResponseEntity<JsonResult> getRecentManagerNotificationById(
        @PathVariable Long managerId) {

        List<ManagerNotificationResponseDTO> notificationById = notificationService.getRecentManagerNotificationsById(managerId);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(notificationById));
    }

    @PostMapping("/managers/{managerId}")
    public ResponseEntity<JsonResult> createManagerNotification(
        @RequestBody ManagerNotificationCreateRequestDTO dto,
        @PathVariable Long managerId) {

        ManagerNotificationResponseDTO notification = notificationService.createManagerNotification(dto, managerId);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(notification));
    }

    @PutMapping("/managers/{notificationId}")
    public ResponseEntity<JsonResult> updateManagerNotificationIsRead(
        @PathVariable Long notificationId,
        @RequestBody ManagerNotificationUpdateRequestDTO dto
    ) {
        ManagerNotificationResponseDTO notification = notificationService.updateManagerNotificationIsRead(notificationId, dto);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(notification));
    }

}
