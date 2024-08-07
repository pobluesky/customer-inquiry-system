package com.pobluesky.backend.domain.notification.controller;

import com.pobluesky.backend.domain.notification.dto.request.CustomerNotificationCreateRequestDTO;
import com.pobluesky.backend.domain.notification.dto.request.CustomerNotificationUpdateRequestDTO;
import com.pobluesky.backend.domain.notification.dto.request.ManagerNotificationCreateRequestDTO;
import com.pobluesky.backend.domain.notification.dto.request.ManagerNotificationUpdateRequestDTO;
import com.pobluesky.backend.domain.notification.dto.response.CustomerNotificationResponseDTO;
import com.pobluesky.backend.domain.notification.dto.response.ManagerNotificationResponseDTO;
import com.pobluesky.backend.domain.notification.service.CustomerNotificationService;
import com.pobluesky.backend.domain.notification.service.ManagerNotificationService;
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

    private final CustomerNotificationService customerNotificationService;
    private final ManagerNotificationService managerNotificationService;

    // 고객사
    @GetMapping("/customers/{customerId}")
    public ResponseEntity<JsonResult> getCustomerNotificationsById(
        @PathVariable Long customerId
    ) {

        List<?> notification = customerNotificationService.getNotificationsById(customerId);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(notification));
    }

    @GetMapping("/customers/read/{customerId}")
    public ResponseEntity<JsonResult> getRecentCustomerNotificationById(
        @PathVariable Long customerId) {

        List<?> notificationById = customerNotificationService.getRecentNotifications(customerId);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(notificationById));
    }

    @PostMapping("/customers/{customerId}")
    public ResponseEntity<JsonResult> createCustomerNotification(
        @RequestBody CustomerNotificationCreateRequestDTO dto,
        @PathVariable Long customerId) {

        CustomerNotificationResponseDTO notification = (CustomerNotificationResponseDTO) customerNotificationService.createNotification(dto, customerId);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(notification));
    }

    @PutMapping("/customers/{notificationId}")
    public ResponseEntity<JsonResult> updateCustomerNotificationIsRead(
        @PathVariable Long notificationId,
        @RequestBody CustomerNotificationUpdateRequestDTO dto
    ) {
        CustomerNotificationResponseDTO notification = (CustomerNotificationResponseDTO) customerNotificationService.updateNotificationIsRead(notificationId, dto);

        return ResponseEntity.status(HttpStatus.OK)
           .body(ResponseFactory.getSuccessJsonResult(notification));
    }


    // 담당자
    @GetMapping("/managers/{managerId}")
    public ResponseEntity<JsonResult> getAllManagerNotifications(
        @PathVariable Long managerId
    ) {

        List<?> notification = managerNotificationService.getNotificationsById(managerId);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(notification));
    }

    @GetMapping("/managers/read/{managerId}")
    public ResponseEntity<JsonResult> getRecentManagerNotificationById(
        @PathVariable Long managerId) {

        List<?> notificationById = managerNotificationService.getRecentNotifications(managerId);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(notificationById));
    }

    @PostMapping("/managers/{managerId}")
    public ResponseEntity<JsonResult> createManagerNotification(
        @RequestBody ManagerNotificationCreateRequestDTO dto,
        @PathVariable Long managerId) {

        ManagerNotificationResponseDTO notification = (ManagerNotificationResponseDTO) managerNotificationService.createNotification(dto, managerId);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(notification));
    }

    @PutMapping("/managers/{notificationId}")
    public ResponseEntity<JsonResult> updateManagerNotificationIsRead(
        @PathVariable Long notificationId,
        @RequestBody ManagerNotificationUpdateRequestDTO dto
    ) {
        ManagerNotificationResponseDTO notification = (ManagerNotificationResponseDTO) managerNotificationService.updateNotificationIsRead(notificationId, dto);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(notification));
    }

}
