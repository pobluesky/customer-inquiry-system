package com.pobluesky.backend.domain.notification.controller;

import com.pobluesky.backend.domain.notification.dto.response.MobileNotificationResponseDTO;
import com.pobluesky.backend.domain.notification.service.NotificationService;

import io.swagger.v3.oas.annotations.Operation;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/mobile/api/notifications")
public class MobileNotificationController {

    private final NotificationService notificationService;

    @Operation(summary = "담당자 계정별 읽지 않은 알림 전체 조회")
    @GetMapping("/{userId}")
    public List<MobileNotificationResponseDTO> getAllManagerNotifications(@PathVariable Long userId) {

        return notificationService.getNotificationsById(userId);
    }

    @Operation(summary = "담당자 계정별 읽은 알림 조회")
    @GetMapping("/read/{userId}")
    public List<MobileNotificationResponseDTO> getRecentManagerNotificationById(@PathVariable Long userId) {

        return notificationService.getRecentNotifications(userId);
    }

    @PutMapping("/{notificationId}")
    public void updateNotificationIsRead(@PathVariable Long notificationId) {

        notificationService.updateNotificationIsRead(notificationId);
    }
}
