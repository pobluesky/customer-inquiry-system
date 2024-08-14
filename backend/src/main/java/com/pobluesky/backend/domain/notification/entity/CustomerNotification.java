package com.pobluesky.backend.domain.notification.entity;

import com.pobluesky.backend.domain.user.entity.Customer;
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
@Table(name = "customer_notification")
public class CustomerNotification extends Notification {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private Customer customer;

    @Builder
    public CustomerNotification(
        String notificationContents,
        boolean isRead,
        Customer customer
    ) {
        this.notificationContents = notificationContents;
        this.isRead = isRead;
        this.customer = customer;
    }

    public void updateIsRead(
        Boolean isRead
    ) {
        this.isRead = true;
    }
}
