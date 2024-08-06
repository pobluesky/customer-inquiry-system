package com.pobluesky.backend.domain.notification.entity;

import com.pobluesky.backend.domain.user.entity.Manager;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "manager_notification")
public class ManagerNotification extends Notification {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "manager_id")
    private Manager manager;

    @Builder
    public ManagerNotification(
        String notificationContents,
        Boolean isRead,
        Manager manager
    ) {
        this.notificationContents = notificationContents;
        this.isRead = isRead;
        this.manager = manager;
    }

    public void setIsRead() {
        this.isRead = true;
    }
}