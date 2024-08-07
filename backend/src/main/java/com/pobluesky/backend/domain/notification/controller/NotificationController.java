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
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
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
    @Operation(summary = "고객사 계정별 알림 조회")
    @GetMapping("/customers/{customerId}")
    public ResponseEntity<JsonResult> getCustomerNotificationsById(
        @PathVariable Long customerId
    ) {

        List<?> notification = notificationService.getNotificationsById(customerId, NotificationType.CUSTOMER);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(notification));
    }

    @Operation(summary = "고객사 계정별 읽은 알림 조회")
    @GetMapping("/customers/read/{customerId}")
    public ResponseEntity<JsonResult> getRecentCustomerNotificationById(
        @PathVariable Long customerId) {

        List<?> notificationById = notificationService.getRecentNotifications(customerId, NotificationType.CUSTOMER);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(notificationById));
    }

    @Operation(summary = "고객사 계정별 알림 전송")
    @PostMapping("/customers/{customerId}")
    public ResponseEntity<JsonResult> createCustomerNotification(
        @RequestBody CustomerNotificationCreateRequestDTO dto,
        @PathVariable Long customerId) {

        CustomerNotificationResponseDTO notification = (CustomerNotificationResponseDTO) notificationService.createNotification(dto, customerId, NotificationType.CUSTOMER);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(notification));
    }

    @Operation(summary = "고객사 알림 상태 변경(안 읽음 -> 읽음)")
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
    @Operation(summary = "담당자 계정별 알림 조회")
    @GetMapping("/managers/{managerId}")
    public ResponseEntity<JsonResult> getAllManagerNotifications(
        @PathVariable Long managerId
    ) {

        List<?> notification = notificationService.getNotificationsById(managerId, NotificationType.MANAGER);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(notification));
    }

    @Operation(summary = "담당자 계정별 읽은 알림 조회")
    @GetMapping("/managers/read/{managerId}")
    public ResponseEntity<JsonResult> getRecentManagerNotificationById(
        @PathVariable Long managerId) {

        List<?> notificationById = notificationService.getRecentNotifications(managerId, NotificationType.MANAGER);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(notificationById));
    }

    @Operation(summary = "담당자 계정별 알림 전송")
    @PostMapping("/managers/{managerId}")
    public ResponseEntity<JsonResult> createManagerNotification(
        @RequestBody ManagerNotificationCreateRequestDTO dto,
        @PathVariable Long managerId) {

        ManagerNotificationResponseDTO notification = (ManagerNotificationResponseDTO) notificationService.createNotification(dto, managerId, NotificationType.MANAGER);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(notification));
    }

    @Operation(summary = "담당자 알림 상태 변경(안 읽음 -> 읽음)")
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
