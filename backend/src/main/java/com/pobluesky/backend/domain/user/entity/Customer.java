package com.pobluesky.backend.domain.user.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "customers")
public class Customer extends User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userNo;

    private String customerCode;

    private String customerName;

    /*
    Builder Pattern
     */
    @Builder
    private Customer(
        String name,
        String email,
        String password,
        String phone,
        String customerCode,
        String customerName
    ) {
        // TODO : 빈칸일 경우 validate
//        if (name.isBlank() || email.isBlank() || password.isBlank()) {
//            throw new CommonException(ErrorCode.INVALID_REQUEST);
//        }

        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.customerCode = customerCode;
        this.customerName = customerName;
    }

    public void updateCustomer(
        String name,
        String email,
        String password,
        String phone
    ) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }
}
